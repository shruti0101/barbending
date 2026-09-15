import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import { deleteFromR2 } from "@/utils/deleteFromR2";
import { uploadToR2 } from "@/utils/uploadToR2";

// GET /api/blog/:id
export async function GET(_req, { params }) {
  await connect();
  const blog = await Blog.findById(params.id);
  if (!blog) return new Response("Not found", { status: 404 });
  return new Response(JSON.stringify(blog), { status: 200 });
}

// PUT /api/blog/:id  -> update fields; if a new image provided (multipart) replace it
export async function PUT(req, { params }) {
  try {
    await connect();

    const contentType = req.headers.get("content-type") || "";
    let data = {};
    let newFile = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      data.title = formData.get("title");
      data.permalink = formData.get("permalink");
      data.content = formData.get("content");
      data.metaTitle = formData.get("metaTitle");
      data.metaDescription = formData.get("metaDescription");
      newFile = formData.get("image"); // optional File
    } else {
      data = await req.json();
    }

    const existing = await Blog.findById(params.id);
    if (!existing) return new Response("Not found", { status: 404 });

    // If new image uploaded, delete old from ImageKit and upload new
     if (newFile && newFile.name) {
      // ✅ DELETE OLD IMAGE
      if (existing.imageFileId) {
        await deleteFromR2(existing.imageFileId);
      }

      // ⬆ UPLOAD NEW IMAGE
      const bytes = await newFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${newFile.name}`;

      // upload to R2
      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "shreeshakti",
        fileName,
        contentType: newFile.type,
      });

      data.image = uploadedImage.url;
      data.imageFileId = uploadedImage.key; // ✅ FULL PATH
    }


    const updated = await Blog.findByIdAndUpdate(params.id, data, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error("PUT /api/blog/:id error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// DELETE /api/blog/:id  -> delete blog and its ImageKit file
export async function DELETE(_req, { params }) {
  try {
    await connect();
    const blog = await Blog.findById(params.id);
    if (!blog) return new Response("Not found", { status: 404 });

    if (blog.imageFileId) {
      await deleteFromR2(blog.imageFileId);
    }

    await Blog.findByIdAndDelete(params.id);
    return new Response("Deleted successfully", { status: 200 });
  } catch (err) {
    console.error("DELETE /api/blog/:id error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

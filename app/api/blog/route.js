import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import imagekit from "@/utils/imageKit";
import { uploadToR2 } from "@/utils/uploadToR2";

// GET /api/blog  -> list all blogs
export async function GET() {
  await connect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), { status: 200 });
}

// POST /api/blog  -> create blog with optional image upload (multipart/form-data)
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();
    const title = formData.get("title");
    const permalink = formData.get("permalink");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    let imageUrl = "";
    let imageFileId = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "shreeshakti",
        fileName,
        contentType: file.type,
      });

      imageUrl = uploadedImage.url;
      imageFileId = uploadedImage.key;
    }

    const blog = await Blog.create({
      title,
      permalink,
      content,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imageFileId,
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error("POST /api/blog error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

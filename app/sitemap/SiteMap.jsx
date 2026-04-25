import React from "react";
import Link from "next/link";
import { categories, products } from "@/Data";

const SiteMap = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact-us" },
    { name: "Blogs", path: "/blogs" },

  ];

  

  return <>
   <div className="bg-[#f7f7f7] min-h-screen py-16 px-4 sm:px-10 ">
      <div className="max-w-[1200px] mx-auto pt-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-5">
          Sitemap
        </h1>

        {/* Static Pages */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Pages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pages.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="bg-white border rounded-lg h-[70px] flex items-center justify-center text-center font-medium text-gray-800 hover:bg-[#3f2211] hover:text-[#faac18] hover:shadow-lg transition transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      

        {/* {Products} */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className=" rounded-lg  flex items-center justify-center text-center font-medium text-Black   transition transform hover:scale-105"
              >
                {prod.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  </>;
};

export default SiteMap;

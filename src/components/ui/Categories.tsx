import Image, { StaticImageData } from "next/image";
import React from "react";
import tech from "@/image/tech.jpeg";
import education from "@/image/education.jpg";
import finance from "@/image/finance.jpeg";
import howto from "@/image/how-to.jpg";
import Link from "next/link";

interface Category {
  title: string;
  slug: string;
  image: StaticImageData;
}

const categories: Category[] = [
  { title: "Technology", slug: "technology", image: tech },
  { title: "Education", slug: "education", image: education },
  { title: "Finance", slug: "finance", image: finance },
  { title: "How-Tos", slug: "how-tos", image: howto },
];

const Categories = () => {
  return (
    <div className="bg-[#EBEEF4] dark:bg-[#111111]  pt-16 pb-6">
      <h1 className="text-center text-3xl my-4">Categories</h1>
      <div className="flex justify-center gap-14 my-4 flex-wrap">
        {categories.map((category, index) => (
          <Link href={`blog/category/${category.slug}`} key={index}>
            <div className="flex flex-col items-center ">
              {(index === 1 || index === 3) && (
                <h2 className="text-3xl font-bold mb-2 w-full text-center py-3 rounded-md bg-[#c6c7ca] dark:bg-black">
                  {category.title}
                </h2>
              )}
              <Image
                src={category.image}
                alt={category.title}
                className="h-60 w-60 object-cover rounded-md"
              />
              {(index === 0 || index === 2) && (
                <h2 className=" text-3xl font-bold mt-2 w-full text-center py-3 rounded-md bg-[#c6c7ca] dark:bg-black">
                  {category.title}
                </h2>
              )}
            </div>
          </Link>
        ))}
      </div>
      <Link href={'/blog'} className="flex justify-center mt-10">
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md border-2 border-black dark:border-white  dark:text-black dark:bg-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">
        View More
      </button>
      </Link>
    </div>
  );
};

export default Categories;

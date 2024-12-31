import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { BlogsType } from "./Latest";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const FeaturedBlogCard = ({ blog, index }: { blog: BlogsType, index:number }) => {
  return (
    <div className={`px-2 flex  justify-between items-center ${index === 1 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
      <div className="my-4 space-y-4 mx-4">
        <div className="flex items-center justify-between">
            <div className="flex space-x-2">
          {blog.tags.slice(0, 2).map((tag, index) => (
            <p
              key={index}
              className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </p>
          ))}
          </div>

          <div className="flex items-center text-sm space-x-2">
            <RxAvatar className="text-xl" />
            <span className="font-medium ">Ali Shahzad</span>
            <span>|</span>
            <span>{blog._createdAt.split('T')[0]}</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold line-clamp-2">{blog.title}</h2>
        <p className="line-clamp-3">
          {blog.summary}
        </p>
        <Link href={`/blog/${blog.slug.current}`} >
        <button className="bg-green-600 mt-3 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700">
          Read More
        </button>
        </Link>
      </div>

      <Image
        src={urlFor(blog.mainImage).url()}
        alt="Blog Cover"
        width={500}
        height={500}
        className="rounded-3xl w-full md:w-[50%] object-cover object-center"
      />
    </div>
  );
};

export default FeaturedBlogCard;

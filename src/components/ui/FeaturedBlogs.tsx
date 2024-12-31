import { client } from "@/sanity/lib/client";
import FeaturedBlogCard from "./FeaturedBlogCard";
import { BlogsType } from "./Latest";

const FeaturedBlogs = async() => {
    const data:BlogsType[] = await client.fetch(`*[_type =='blog'] | order(_createdAt desc)`)
    const filteredData = data.filter((blog) => blog.tags.includes('featured'))
  return (
    <div className="flex justify-center pb-10">
    <div className="w-[85vw] md:w-[900px]">
        <h2 className="text-2xl font-semibold border-b-2 my-3 py-2">Featured Blogs</h2>
        {filteredData.map((blog, index) => (
            <FeaturedBlogCard key={index} blog={blog} index={index}/>
        ))}
    </div>
    </div>
  );
};

export default FeaturedBlogs;

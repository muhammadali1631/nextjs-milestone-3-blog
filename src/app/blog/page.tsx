import BlogCard from "@/components/ui/BlogCard";
import { client } from "@/sanity/lib/client";
import { BlogsType } from "@/components/ui/Latest";


const HomePage = async() => {
    const blogs:BlogsType[] = await client.fetch(`*[_type == "blog"] | order(publishedAt desc)`)
  return (
    <div className="container mx-auto p-4">
      <h1 className="border-b-2 text-2xl font-bold py-2">All Blogs</h1>
      <div className="flex flex-wrap gap-10 justify-center my-10">
        {
          blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index}/>
          ))
        }
    </div>
    </div>
  );
};

export default HomePage;

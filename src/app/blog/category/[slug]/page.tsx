import BlogCard from "@/components/ui/BlogCard"
import { BlogsType } from "@/components/ui/Latest"
import { client } from "@/sanity/lib/client"
export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const data:BlogsType[] = await client.fetch(`*[_type == "blog"]`)
    const filteredData = data.filter((blog:BlogsType) => blog.tags.includes(slug))
    return (
        <div className="container mx-auto p-4">
            <h1 className="border-b-2 text-2xl font-bold py-2">{slug.charAt(0).toUpperCase() + slug.slice(1)} Blogs</h1>
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {
            filteredData.map((blog:BlogsType, index:number) => (
              <BlogCard blog={blog} key={index}/>
            ))
          }
      </div>
      </div>
      )

  }
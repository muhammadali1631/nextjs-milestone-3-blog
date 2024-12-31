import React from 'react'
import { BlogsType } from './Latest'
import { client } from '@/sanity/lib/client'
import BlogCard from './BlogCard'

const RelatedBlogs = async({tags}:{tags: string[]}) => {
        const data:BlogsType[] = await client.fetch(`*[_type =='blog'] | order(_createdAt desc)`)
        const filteredData = data.filter(blog => blog.tags.some(tag => tags.includes(tag)))
        
    
  return (
    <div className=" flex justify-center">

    <div className=" w-[90vw]">
        <h2 className="text-2xl font-semibold border-b-2 my-3 py-2">Related Blogs</h2>
        <div className=' flex  gap-10 overflow-x-scroll'>
            {filteredData.map((blog, index) => (
                <BlogCard key={index} blog={blog}/>
            ))}
        </div>
    </div>
            </div>
  )
}

export default RelatedBlogs
import React from 'react'
import BlogCard from './BlogCard'
import { client } from '@/sanity/lib/client'
import { BlogsType } from './Latest'
import Link from 'next/link'

const BlogSection = async() => {
    const data:BlogsType[] = await client.fetch(`*[_type =='blog'] | order(_createdAt desc)`)
  return (
    <div className=" mx-10">
        <h2 className="text-2xl font-semibold border-b-2 my-3 py-2">Article & Blogs</h2>
        <div className='flex flex-wrap justify-center gap-10 py-5'>
            {data.map((blog, index) => (
                <BlogCard key={index} blog={blog}/>
            ))}
        </div>
        <div className='flex justify-center'>
        <Link href={'/blog'} className='mx-auto bg-green-600 mt-3 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700'>
        View All Blog
        </Link>
        </div>
    </div>
  )
}

export default BlogSection
import { client } from '@/sanity/lib/client'
import React from 'react'
import { FilteredDataType } from './Slider'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
export interface BlogsType extends FilteredDataType {
    _createdAt: string;
}
const Latest = async() => {
    const data:BlogsType[] = await client.fetch(`*[_type =='blog'] | order(_createdAt desc)`)
    
  return (
    <div className='flex justify-center'>
        <div className='w-[85vw] sm:w-[550px] md:w-[800px] bg-[#e0e1e3] dark:bg-[#111111] my-20 p-4 rounded-md'>
            <h2 className='text-2xl font-semibold'>Latest New&apos;s</h2>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <div className='md:w-[60%]'>
                    {data.slice(0, 3).map((blog, index) => (
                        <Link href={`/blog/${blog.slug.current}`} key={index}>
                        <div className='flex gap-4 my-4 items-center'>
                                <Image src={urlFor(blog.mainImage).url()} alt={blog.title} width={100} height={100} className='h-24 w-24 object-cover'/>
                            <div className='flex flex-col gap-1 text-sm'>
                                    <p>{blog._createdAt.split('T')[0]}</p>
                                <h3 className=' font-semibold'>{blog.title}</h3>
                                <p className=' line-clamp-2'>{blog.summary}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                    <Link href={`/blog/${data[3].slug.current}`}>
                <div className='w-[260px] sm:w-[350px] relative'>
                    <Image src={urlFor(data[3].mainImage).url()} alt='asd' height={300} width={350} className='w-[260px] sm:w-[350px] sm:h-[300px] object-cover'/>
                    <div className='absolute top-0 left-0 bg-[#000000] text-white bg-opacity-50 w-full h-full flex flex-col justify-between'>
                        <h2 className='p-2 m-2'>{data[3].tags[0]}</h2>
                        <h2 className=' text-2xl font-semibold m-1'>{data[3].title}</h2>
                        </div>
                </div>
                        </Link>
            </div>            
        </div>
    </div>
  )
}

export default Latest
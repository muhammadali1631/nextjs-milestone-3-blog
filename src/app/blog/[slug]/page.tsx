import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import {PortableText} from '@portabletext/react'
import Comment from "@/components/ui/Comment"
import RelatedBlogs from "@/components/ui/RelatedBlogs"
export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const data = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug })
    return (
      <div>
        <div className="flex justify-center w-full">
        <div className="w-[90vw] md:w-[700px] my-10 space-y-5">
          <h1 className="text-3xl md:text-5xl font-black">{data.title}</h1>
            <p className="text-xl">{data.summary}</p>
          <div className="flex gap-5 font-bold">
            <p>Author: {data.author}</p>
            <p>{data._createdAt.split('T')[0]}</p>
            </div>
            <Image src={urlFor(data.mainImage).url()} height={300} width={600} alt={data.title} className="w-full h-[200px] md:h-[400px] object-cover"/>
            <PortableText value={data.content}components={{
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 text-xl">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 text-xl">
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li>{children}</li>
                ),
                number: ({ children }) => (
                  <li className="mb-2">{children}</li>
                ),
              },   
            block: {
              h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-3xl font-medium mb-2">{children}</h3>,
              h4: ({ children }) => <h4 className="text-2xl font-medium mb-2">{children}</h4>,
              h5: ({ children }) => <h5 className="text-2xl font-medium mb-2">{children}</h5>,
              normal: ({ children }) => (
                <p className="text-xl leading-relaxed  mb-4">{children}</p>
              ),
            }}} />
        </div>
        </div>
        <RelatedBlogs tags={data.tags}/>
        <Comment postId={data._id}/>
        </div>
    )
  }
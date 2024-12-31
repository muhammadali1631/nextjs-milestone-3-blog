import Image from 'next/image';
import Link from 'next/link';
import { BlogsType } from './Latest';
import { urlFor } from '@/sanity/lib/image';

const BlogCard = ({blog}: {blog:BlogsType}) => {
  return (
    <Link href={`/blog/${blog.slug.current}`}>
    <div className="w-[300px] sm:w-[320px] overflow-hidden ">
        <Image
          src={urlFor(blog.mainImage).url()} 
          alt="Blog Image"
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />
        <div className='p-2'>

        <h2 className="text-lg font-bold line-clamp-2">
          {blog.title}
        </h2>
        <p className=" text-sm mt-2 line-clamp-3">
          {blog.summary}
        </p>
        </div>
    </div>
    </Link>
  );
};

export default BlogCard;

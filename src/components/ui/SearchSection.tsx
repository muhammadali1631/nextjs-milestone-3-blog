'use client'
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { FilteredDataType } from './Slider';
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const SearchSection = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<FilteredDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "blog"]`);
        const filteredData: FilteredDataType[] = response.filter(
          (item: FilteredDataType) => item.title.toLowerCase().includes(value.toLowerCase())
        );
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        className="px-2 md:px-4 py-1 md:py-2 rounded-md focus:outline-none border w-full lg:w-96"
      />
      {value && (
        <div className="absolute  left-0 z-30 mt-2 w-screen top-16">
          <div className="flex left-0 md:justify-center w-screen">
            <div className="shadow-lg  left-0 border w-screen lg:w-[700px] bg-white dark:bg-black rounded-md">
              
              {data.length === 0 ? <h2 className="text-center">Not Found</h2> :  data.map((item) => (
                <Link href={`/blog/${item.slug.current}`} key={item.title} onClick={() => setValue('')}>
                <div  className="px-4 py-2 border-b">
                  <div className="flex items-center space-x-2">
                  <Image src={urlFor(item.mainImage).url()} width={80} height={100} alt={item.title} className=" rounded object-cover"/>
                  <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="line-clamp-2">{item.summary}</p>
                  </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSection;

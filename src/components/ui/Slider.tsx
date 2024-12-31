'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export interface FilteredDataType {
  tags: string[];
  title: string;
  slug: Record<string, string>;
  mainImage: SanityImageSource;
  summary: string;
}

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState<FilteredDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "blog"]`);
        const filteredData: FilteredDataType[] = response.filter((item: FilteredDataType) =>
          item.tags.includes('top')
        );
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const handleLineClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (data.length === 0) {
    return <div className="h-[500px] w-full flex items-center justify-center"></div>;
  }

  return (
    <div className="relative h-[300px] sm:h-[500px] w-full">
      <Link href={`/blog/${data[currentImageIndex]?.slug.current}`}>
      <Image
        src={urlFor(data[currentImageIndex]?.mainImage).url()}
        alt={`Slide ${currentImageIndex + 1}`}
        layout='fill'
        className='object-cover'
      />

      <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>
      <div className="absolute w-full h-full z-20 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">{data[currentImageIndex]?.title}</h1>
      </div>
      </Link>

      <div className="absolute bottom-5 w-full flex justify-center z-20">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => handleLineClick(index)}
            className={`cursor-pointer h-[5px] w-[40px] mx-1 ${
              currentImageIndex === index ? 'bg-gray-600' : 'bg-gray-400'
            }`}
          >
            {currentImageIndex === index && (
              <div
                className="h-full w-full bg-gray-600"
                style={{ animation: 'fill 3s linear' }}
              />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fill {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  
  );
}

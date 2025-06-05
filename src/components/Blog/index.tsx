import React from 'react'
import { Button } from '../ui/button';
import BlogCard from './Card';
import { BlogData } from '@/lib/dummyData';
import Image from 'next/image'

const BlogComponent = () => {
  return (
    <>
      <div className="relative container px-4 sm:px-20 border-t border-white py-[62px] flex w-full flex-col">
        <div className="flex justify-between items-center text-white w-full mb-[40px] sm:mb-[66px]">
          <h1 className="font-bold uppercase text-[32px] leading-[40px] text-center sm:text-left w-full">
            MORE ABOUT TREEPZ TECHNOLOGY
          </h1>
          <Button
            variant={"outline"}
            className="hidden border-white w-fit sm:w-[325px] !bg-transparent px-4 text-white hover:text-white group overflow-hidden relative sm:flex text-sm"
            //onClick={() => {}}
          >
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Learn more about corporate shuttles
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Learn more about corporate shuttles
            </span>
          </Button>
        </div>
        {/*  */}
        <div className="w-full flex flex-col sm:flex-row gap-8 mb-[215px]">
          {BlogData.map(({ src, title, description }) => (
            <BlogCard
              src={src}
              title={title}
              description={description}
              key={title}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[52px] -mt-2 z-20 relative">
        <Image
          src="/blue-blur-rect.png"
          fill
          sizes="100vw"
          priority
          className="absolute object-fill"
          alt="rect"
        />
      </div>
    </>
  );
}

export default BlogComponent

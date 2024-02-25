import React from 'react'
import { Button } from '../ui/button';
import BlogCard from './Card';
import { BlogData } from '@/lib/dummyData';

const BlogComponent = () => {
  return (
    <div className="container px-4 sm:px-20 border-t border-white py-[62px] flex w-full flex-col">
      <div className="flex justify-between items-center text-white w-full mb-[40px] sm:mb-[66px]">
        <h1 className="font-bold uppercase text-[32px] leading-[40px] text-center sm:text-left w-full">
          MORE ABOUT TREEPZ TECHNOLOGY
        </h1>
        <Button
          variant={"outline"}
          className="hidden cursor-pointer border-white w-fit sm:w-[279px] !bg-transparent px-4 text-white sm:flex items-center hover:text-white"
          //onClick={() => {}}
        >
          Learn more about corporate shuttles
        </Button>
      </div>
      {/*  */}
      <div className="w-full flex flex-col sm:flex-row gap-8 mb-16">
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
  );
}

export default BlogComponent
import Image from 'next/image';
import React from 'react'

interface IProps {
    src: string;
    title: string;
    description: string
}
const BlogCard:React.FC<IProps> = ({ src, title, description }) => {
  return (
    <div className="w-full sm:w-[397.33px] flex flex-col">
      <div className="w-full sm:w[397px] h-[248px] relative mb-2 sm:mb-8">
        <Image
          src={`/${src}`}
          alt={src}
          fill
          priority
          className="absolute object-contain"
        />
      </div>
      <h1 className="text-2xl font-medium text-white">{title}</h1>
      <p className="!text-[#D9D9D9] text-xl mt-3">
       {description}
      </p>
    </div>
  );
}

export default BlogCard
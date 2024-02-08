import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

interface IProps {
  src: string;
  title: string;
  index: number
}
const PostalCard:React.FC<IProps> = ({ src, title, index}) => {
  return (
    <div className="flex flex-col w-full sm:w-[408px]">
      <div className="w-full sm:w-[408px] h-[309px] relative overflow-hidden rounded-2xl">
        <Image
          src={`/postals/${src}`}
          alt={src}
          fill
          priority
          className="absolute object-cover"
        />
        <div className={clsx({
          "absolute flex flex-col space-y-3 left-0 right-0 bottom-0 w-[297px] ml-6 mb-5 sm:mb-10": true,
          "sm:w-[250px]": [2, 3, 6].includes(index)
          })}>
          <span className="bg-white rounded-full flex justify-center items-center w-14 h-14 font-bold text-[32px]">
            {index}
          </span>
          <p className="mt-[20px] text-white font-extrabold text-xl sm:text-[28px] leading-[40px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostalCard
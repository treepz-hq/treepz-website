import React from 'react'
import Image from 'next/image'

interface IProps {
  src: string;
  title: string;
  description: string
}

const WeddingPostal:React.FC<IProps> = ({ src, title, description }) => {
  return (
    <div className="sm:mt-[70px] sm:mb-[147px] w-full sm:w-[397.5px] h-fit sm:h-[552px] p-4 pb-8 rounded-2xl shadow">
      <div className="w-full sm:w-[365.5px] h-[280px] relative overflow-hidden">
        <Image
          src={`/${src}`}
          alt={src}
          fill
          priority
          className="object-contain absolute"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-[#4D5154]">
          {title}
        </h1>
        <p className="my-8 text-[#6F7174] text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WeddingPostal
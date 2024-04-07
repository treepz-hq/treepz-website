import React from 'react'
import Image from 'next/image'

interface IProps {
    src: string;
}

const StaticPartners: React.FC<IProps> = ({ src }) => {
  return (
    <div className={`w-[100px] sm:max-w-[181px] h-16 relative flex items-center`}>
      <Image
        src={`/statics/${src}`}
        fill
        alt={src}
        className="absolute object-contain"
      />
    </div>
  );
}

export default StaticPartners;
import React from 'react'
import Image from 'next/image'

interface IProps {
    src: string;
}

const OurPartners: React.FC<IProps> = ({ src }) => {
  return (
    <div className={`w-[100px] sm:max-w-[181px] h-16 relative flex items-center`}>
      <Image
        src={`/partners/${src}`}
        fill
        alt={src}
        className="absolute object-contain"
      />
    </div>
  );
}

export default OurPartners

import React from "react";
import Image from "next/image";

interface IProps {
  data: {
    src: string;
    height?: number;
    width?: number;
  }[];
}

const PartnersLogo: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data.map(({ src, height = 48, width = 110.75 }, index) => (
          <Image
            src={`/partners/${src}`}
            alt={src}
            sizes="100vw"
            className="object-contain"
            height={height}
            width={width}
            key={index}
          />
      ))}
    </>
  );
};

export default PartnersLogo;

import React from "react";
import Image from "next/image";

interface MarqueeImagesProps {
  direction?: "left" | "right";
  data: string
}

const MarqueeImages: React.FC<MarqueeImagesProps> = ({
  direction = "left",
  data
}) => {
  return (
    <div className="marquee-container">
      <div
        className={`marquee ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
       {/*  {data?.map(({src}, index) => (
          <div className="marquee-item" key={index}>
            <Image
              src={`/partners/${src}`}
              alt={src}
              width={150}
              height={100}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MarqueeImages;

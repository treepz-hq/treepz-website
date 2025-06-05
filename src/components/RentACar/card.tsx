import Image from "next/image";
import React from "react";
import NextIcon from "@/assets/svgs/next-arrow-icon.svg";
import CarIcon from "@/assets/svgs/car-icon.svg";

interface IProps {
  src: string;
  title: string;
  noOfUsers: number;
}

const RentCarCard:React.FC<IProps> = ({ src, title, noOfUsers}) => {
  return (
    <div className="flex flex-col space-y-2 w-[302px] gap-x-6 transition-transform duration-300 transform-gpu group">
      <div className="w-[302px] h-[233px] relative transition-transform duration-300 transform-gpu group-hover:scale-105 overflow-hidden rounded-2xl">
        <Image
          src={`/${src}`}
          alt={src}
          fill
          priority
          className="absolute object-contain"
        />
      </div>
      <div className="w-full h-10 rounded-full bg-[#F8F9F9] px-[12px] py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CarIcon />
          <span className="text-base font-medium text-[#212529]">{title}</span>
        </div>
        <NextIcon />
      </div>
      <div className="flex items-center gap-1">
        <div className="w-[72px] h-[24px] relative">
          <Image
            src="/peoples.png"
            alt="peoples"
            fill
            priority
            className="absolute"
          />
        </div>
        <span className="text-base text-[#6F7174]">
          {noOfUsers} guests have hired
        </span>
      </div>
    </div>
  );
};

export default RentCarCard;

'use client'
import React, { useState } from "react";
import Image from "next/image";
import PreviousIcon from "@/assets/svgs/previous-arrow-icon.svg";
import NextIcon from "@/assets/svgs/next-arrow-icon.svg";

interface Slide {
  src: string;
  message: string;
  sender: string;
  position: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full !my-[67px] sm:!my-40 bg-[#FEF0EB] p-4 sm:px-12 max-h-fit rounded-2xl sm:rounded-[32px] relative">
      <div className="relative overflow-hidden w-full h-fit pt-20">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mx-10 gap-14">
                <div className="relative w-full sm:w-[320px] h-[160px] sm:ml-10">
                  <Image
                    src={slide.src}
                    alt={slide.src}
                    fill
                    sizes="100vw"
                    priority
                    className="absolute object-contain"
                  />
                </div>
                <div className="w-full sm:w-[742px] sm:text-[32px] sm:leading-[40px] text-[#212529]">
                  <p className="font-semibold w-full">
                    <span className="text-[64px] leading-[40px] text-[#212529]">“</span>{slide.message}
                  </p>
                  <div className="flex justify-between items-center my-8 sm:!mt-[50px]">
                    <p className="text-base sm:text-xl text-[#212529] w-full flex flex-col">
                      <span className="font-semibold">{slide.sender},</span>
                      <span>{slide.position}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute sm:bottom-24 right-20 flex justify-between sm:w-[136px]">
        <span
          onClick={handlePrev}
          className={`w-14 h-14 flex justify-center items-center ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "bg-white cursor-pointer rounded-full"
          }`}
        >
          <PreviousIcon />
        </span>
        <span
          onClick={handleNext}
          className={`w-14 h-14 flex justify-center items-center rounded-full ${
            currentIndex === slides.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-white cursor-pointer"
          }`}
        >
          <NextIcon />
        </span>
      </div>
    </div>
  );
};

export default Slider;

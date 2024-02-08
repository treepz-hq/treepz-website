'use client'
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BetterTogetherComponent = () => {
  return (
    <div className="relative px-4">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent blur-sm mb-24"></div>
      <div className="relative w-full sm:max-w-[1640px] h-[176.66px] sm:h-[377.861px] mx-auto z-0">
        <Image
          src="/footer-header.png"
          alt="footer"
          fill
          priority
          className="absolute object-contain"
        />
      </div>
      <div className="relative z-10 bg-[url(/cta-card.png)] bg-cover bg-no-repeat bg-black p-4 sm:p-14 rounded-2xl sm:rounded-[32px] w-full sm:w-[1138px] sm:mx-auto -mt-16 flex justify-center shadow">
        <div className="w-full sm:w-[791px] mx-auto text-white">
          <h1 className="text-[28px] sm:text-[56px] text-white font-semibold mb-8 w-full text-center sm:w-[800px]">
            TRIPS ARE BETTER TOGETHER
          </h1>
          <p className="text-xl text-[#DEE0E3] text-center w-full">
            Working with you is more than just a quick transaction to us. Our
            dedicated and experienced team always makes sure that we tailor
            exactly to your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-11 sm:w-[450px] mx-auto">
            <Button
              variant={"default"}
              className="cursor-pointer border-gray-900 text-gray-900 rounded-full flex items-center gap-2"
              //onClick={() => {}}
            >
              Explore our business solutions
            </Button>
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-full !bg-transparent text-white border-white hover:text-white flex items-center gap-2"
              //onClick={() => {}}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterTogetherComponent;

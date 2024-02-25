'use client'
import Image from "next/image";
import React from "react";
import { usePathname } from 'next/navigation'
import { Button } from "../ui/button";

const BetterTogetherComponent = () => {
  const pathname = usePathname()
  return (
    <>
      <div className="w-full h-[52px]  -mt-2 z-20 relative">
        <Image
          src="/blue-blur-rect.png"
          fill
          priority
          className="absolute object-fill"
          alt="rect"
        />
      </div>
      <div className="relative px-4 sm:pt-[111px]">
        <div className="relative w-full sm:max-w-[1640px] h-[176.66px] sm:h-[377.861px] mx-auto">
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
              We believe in partnerships, not transactions. Our dedicated team
              goes above and beyond to tailor solutions that perfectly fit your
              unique needs. Forget one-size-fits-all – with Treepz, you get a
              personalized experience that exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-11 sm:w-[452px] mx-auto">
              <Button
                variant={"default"}
                className="w-full sm:w-[284px] sm:h-[64px]"
                //onClick={() => {}}
              >
                Explore our business solutions
              </Button>
              <Button
                variant={"outline"}
                className="!bg-transparent text-white border-white w-fit sm:w-[156px] hover:text-white sm:h-[64px]"
                //onClick={() => {}}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetterTogetherComponent;

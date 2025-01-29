'use client'

import React, { useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useModal } from '@/contexts/ModalContext';
import Share from "@/assets/svgs/share.svg";
import { whatWeLearnt } from "@/lib/dummyData";
import ShareDialog from '../Modal/shareDialog';
import GetACopy from '../GetCopy';

const HeroComponent = () => {
  const router = useRouter();
  const { showModal } = useModal();

  const getCopyRef = useRef<HTMLDivElement | null>(null);

  const scrollToGetCopy = () => {
    if (getCopyRef.current) {
      getCopyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on the first field after scrolling
      setTimeout(() => {
        const firstInput = getCopyRef.current.querySelector('input');
        if (firstInput) {
          (firstInput as HTMLElement).focus();
        }
      }, 500);
    }
  };

  return (
    <div className="w-full mt-[10%]">
      <div
        className='flex flex-col margin-auto py-[45px] mx-[7%] sm:flex-row justify-between items-center gap-4 text-center'
      >
        <div className='w-full items-center text-center sm:w-1/2 sm:text-left'>
          <div className='w-full'>
            <h1 className='text-[#212529] font-bold text-4xl uppercase leading-[52PX]'>The State of <br />Corporate Mobility <br />Report in Africa 2025</h1>
            <p className='text-[#4D5154] my-3 text-sm text-[16px]'>Learn about the current mobility trends in the African landscape impacting how businesses will strategise and operate in 2025.</p>
          </div>
          <div className='flex flex-col gap-4 sm:flex-row w-full sm:w-[378px]'>
            <Button
              variant="default"
              className="relative overflow-hidden sm:w-[200px] sm:h-[40px] text-center items-center sm:px-[2px] group"
              onClick={scrollToGetCopy}
            >
              <span className="transition-transform font-semibold duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                Download Report
              </span>
              <span className="transition-transform font-semibold duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                Download Report
              </span>
            </Button>
            <Button
              variant="outline"
              className="relative sm:w-[200px] sm:h-[40px] group overflow-hidden"
              onClick={() => showModal('share')}
              aria-label="Share this report"
            >
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                <Share className="mr-2" />
                Share Report
              </span>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                <Share className="mr-2" />
                Share Report
              </span>
            </Button>
          </div>
        </div>
        <div className='w-full sm:w-1/2'>
          <Image
            src="/CM.png"
            alt="Corporate Mobility"
            width={400}
            height={300}
            className="w-full h-[300px] object-contain"
            unoptimized
          />
        </div>
      </div>

      <div className="bg-[#F8B02B] rounded-2xl w-[80%] sm:w-[30%] mx-auto mb-[-20px] relative">
        <p className="font-bold text-xl text-[#101010] px-3 py-3 text-center">
          SOME OF WHAT WE LEARNT
        </p>
      </div>

      <div className="w-full p-4 bg-[#FFF8F5]">
        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-[6%] gap-6">
          {whatWeLearnt.map((item, index) => {
            const bgColor =
              item.iconType === "pie"
                ? "bg-[#FDF2D0]"
                : item.iconType === "bar"
                  ? "bg-[#FFECE5]"
                  : "bg-white";

            return (
              <div key={index} className={`rounded-2xl p-6 ${bgColor}`}>
                <div className="flex flex-col items-center">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-[#212529] text-center mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#4D5154] text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={getCopyRef}>
        {/* <GetACopy /> */}
      </div>
      <ShareDialog />
    </div>
  );
};

export default HeroComponent;

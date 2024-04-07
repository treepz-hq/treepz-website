'use client'
import Image from 'next/image';
import React from 'react'
import RentCarCard from './card';
import { Button } from '../ui/button';
import { RentACarData } from '@/lib/dummyData';
import { useModal } from '@/contexts/ModalContext';

const RentACarComponent = () => {
  const { showModal } = useModal();
  return (
    <div className="flex flex-col w-full my-10 container px-4 sm:px-20">
      <h1 className="font-bold text-[28px] uppercase leading-[32px] text-[#212529] mb-10 text-center sm:text-left">
        LOOKING FOR a PERSONAL COMMUTE for your next event? RENT A CAR
      </h1>
      <div className="flex gap-6 overflow-x-scroll sm:overflow-hidden">
        {RentACarData.map(({ src, title, noOfUsers }: any) => (
          <RentCarCard
            src={src}
            key={title}
            title={title}
            noOfUsers={noOfUsers}
          />
        ))}
        <div className="relative w-[294px] h-auto">
          <Image
            src="/without-limit.png"
            alt="without limit"
            fill
            priority
            className="absolute object-contain"
          />
          <div className="absolute w-full mx-auto space-y-[18px] px-4 mx-4 bottom-4">
            <p className="mt-[20px] text-white text-base sm:text-lg leading-[40px]">
              Explore without limits. <br />
              Find your next ride.
            </p>
            <Button
              variant={"default"}
              className="rounded-lg w-full !h-10 group relative overflow-hidden"
              onClick={showModal}
            >
               <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                Rent a car now
              </span>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                Rent a car now
              </span>
              
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentACarComponent
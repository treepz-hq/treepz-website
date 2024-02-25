'use client'
import Image from 'next/image';
import React from 'react'
import RentCarCard from './card';
import { Button } from '../ui/button';
import { RentACarData } from '@/lib/dummyData';

const RentACarComponent = () => {
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
              className="cursor-pointer rounded-lg w-full !h-10 text-gray-900 flex items-center gap-2"
              //onClick={() => {}}
            >
              Rent a car now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentACarComponent
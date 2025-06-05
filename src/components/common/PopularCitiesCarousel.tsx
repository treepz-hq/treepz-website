'use client'
import React, { useState ,useEffect} from 'react'
import Image from 'next/image'
import ArrowLeftLine from '@/assets/svgs/arrow-left-line.svg'
import ArrowRightLine from '@/assets/svgs/arrow-right-line.svg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const PopularCitiesCarousel = () => {
    const [number, setNumber] = useState(0)
  const handleRightClick = () => {
    if (number <= 400) { // Ensure the number does not go above 1000 after adding 200
      setNumber(prevNumber => prevNumber + 200);
            console.log(number)
    }
  };

  const handleLeftClick = (event:any) => {
    if (number >= 200) { // Ensure the number does not go below 0 after subtracting 200
      setNumber(prevNumber => prevNumber - 200);

    }
  };
    useEffect(() => {setNumber(number)},[number])
  return (
    <div className="w-full relative overflow-hidden">
      <div className={`w-full flex px-4 flex-col items-center md:items-start md:justify-start gap-y-3 sm:gap-y-0 justify-center md:flex-row -ml-[${number}px] gap-x-6 transition ease-in-out duration-300  mb-5 `}>

        <div className="w-[303px] sm:w-[292px] h-[377px] p-[12px] mb-1 flex flex-col shadow rounded-2xl">
          <div className="w-[268px] h-[205px] relative overflow-hidden">
            <Image
              src="/lagos.png"
              alt="lagos"
              fill
              priority
              className="absolute object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#212529] px-2">
            Lagos
          </h1>
          <p className="text-[#4D5154] text-base">
            Lagos pulses with energy, culture, and endless possibilities. But
            navigating its vibrant chaos can feel like a whole other adventure.
            Experience Lagos with Treepz!
          </p>
        </div>
        <div className="w-[303px] sm:w-[292px] h-[377px] p-[12px] flex flex-col shadow rounded-2xl">
          <div className="w-[268px] h-[205px] relative overflow-hidden">
            <Image
              src="/abuja.png"
              alt="lagos"
              fill
              priority
              className="absolute object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#212529] px-2">
            Abuja
          </h1>
          <p className="text-[#4D5154] text-base">
            Abuja Adventure? Treepz Makes it Easy! Treepz offers convenient and
            affordable rides, letting you discover hidden gems and all the
            must-sees.
          </p>
        </div>
        <div className="w-[303px] sm:w-[292px] h-[377px] p-[12px] flex flex-col shadow rounded-2xl">
          <div className="w-[268px] h-[205px] relative overflow-hidden">
            <Image
              src="/nairobi.png"
              alt="lagos"
              fill
              priority
              className="absolute object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#212529] px-2">
            Nairobi
          </h1>
          <p className="text-[#4D5154] text-base">
            Nairobi&lsquo;s got the energy, the sights, and the hustle, but
            getting around can feel like a marathon. Ditch the stress and
            explore the city effortlessly with Treepz!
          </p>
        </div>
        <div className="w-[303px] sm:w-[292px] h-[377px] p-[12px] flex flex-col shadow rounded-2xl">
          <div className="w-[268px] h-[205px] relative overflow-hidden">
            <Image
              src="/lagos.png"
              alt="lagos"
              fill
              priority
              className="absolute object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#212529] px-2">
            Accra
          </h1>
          <p className="text-[#4D5154] text-base">
            Accra adventures made easy with Treepz! Don&lsquo;t let getting
            around hold you back. Treepz offers rides that fit your budget and
            style.
          </p>
        </div>
        <div className="w-[303px] sm:w-[292px] h-[377px] p-[12px] flex flex-col shadow rounded-2xl">
          <div className="w-[268px] h-[205px] relative overflow-hidden">
            <Image
              src="/kampala.png"
              alt="lagos"
              fill
              priority
              className="absolute object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#212529] px-2">
            Kampala
          </h1>
          <p className="text-[#4D5154] text-base">
            Kampala offers a diverse mix of cultural experiences, bustling
            markets, and historical landmarks. Getting around the city would be
            an exciting adventure with Treepz.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-[292px] hidden md:flex gap-6 p-2 mt-10 ml-10 sm:ml-20">
        <div onClick={handleLeftClick}  className="flex cursor-pointer justify-center border border-gray-900 items-center w-8 h-8 rounded-full">
          <ArrowLeftLine />
        </div>
        <div onClick={handleRightClick} className="flex justify-center cursor-pointer items-center w-8 h-8 border border-gray-900 rounded-full">
          <ArrowRightLine />
        </div>
      </div>
    </div>
    /*  <Carousel className="w-full bg-red-900">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */
  );
}

export default PopularCitiesCarousel

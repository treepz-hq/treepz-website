'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from './partners';
import { OurPartnersData } from './data';

const HeroComponent = () => {
  return (
    <div className="w-full">
      <div className="w-[343px] sm:w-[800px] mx-auto flex flex-col text-center">
        <h1 className="font-bold text-4xl sm:text-[56px] uppercase mt-12 sm:mt-20 sm:leading-[64px]">
          treepz is the corporate mobility solution
        </h1>
        <span className="text-[#F8B02B] hidden sm:inline-flex text-[56px] uppercase text-center font-bold">
          Employee transportation
        </span>
        <div className="mt-6 mb-14 sm:text-left">
          Treepz is the ultimate ground transportation solution for corporate
          travel managers, executives, students, sports teams, and everything
          in-between. We provide shuttles, car services, private cars, buses and
          everything else you need for your business trips, events, and more.
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full text-black flex items-center gap-2"
            //onClick={() => {}}
          >
            Explore our business solutions
          </Button>
          <Button
            variant={"outline"}
            className="cursor-pointer border-gray-900 rounded-full font-bold flex items-center gap-2"
            //onClick={() => {}}
          >
            Get a quote
          </Button>
        </div>
      </div>
      {/* Heros */}
      <div className="relative mt-8 sm:mt-14">
        <div className="relative w-full sm:max-w-[1640px] h-[176.66px] sm:h-[377.861px] mx-auto z-30">
          <Image
            src="/street.png"
            alt="street"
            fill
            priority
            className="absolute object-cover"
          />
        </div>
        <div className="bg-[url(/bg.png)] bg-cover relative bg-no-repeat w-full h-fit -top-[62px] sm:-top-[110px]">
          <div className="container px-4 sm:px-20 py-20 sm:pt-40">
            <div className="w-full sm:w-[897px] flex flex-col mb-14 sm:mb-[104px] text-center sm:text-left">
              <h1 className="text-3xl font-bold text-[#212529] sm:leading-[40px] uppercase mb-6">
                Why choose Treepz?
              </h1>
              <p className="font-normal text-xl text-[#4D5154]">
                At Treepz, we believe in crafting transportation experiences
                that are tailored just for you. Our team, backed by years of
                expertise, is committed to understanding your unique needs and
                ensuring every journey is seamless and memorable.
              </p>
            </div>
            <div className="flex justify-center w-full flex-col sm:max-w-[1252px] mx-auto h-fit">
              <p className="font-semibold text-[#6F7174] w-full text-center">
                Trusted by Your Favorite Businesses
              </p>
              <div className="w-full flex justify-between items-center mb-8 flex-wrap gap-3 my-2 sm:gap-24 space-y-2 sm:space-y-0 mt-6 sm:mt-8">
                {OurPartnersData.map(({src}: any) => (
                  <OurPartners src={src} key={src} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
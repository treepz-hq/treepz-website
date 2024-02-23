'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from './partners';
import { OurPartnersData, NewPartnerLogos } from './data';
import { useRouter } from 'next/navigation'
import SwipeWordAnimation from "../WordSwipe";
import MarqueeImages from '../common/MarqueeImages';
import PartnersLogo from '../common/partners';

const HeroComponent = () => {
  /* Conference Shuttling, vehicle rental, you 
  Employee transportation*/
  const router = useRouter()
  return (
    <div className="w-full mt-5 sm:mt-10">
      <div className="px-4 sm:px-20 w-full flex flex-col">
        <div className="w-full mt-10 sm:mt-[108px]">
          <SwipeWordAnimation />
        </div>
        <div className="mt-6 mb-14 sm:text-left sm:max-w-[1016px] text-xl">
          Treepz is the ultimate ground transportation solution for corporate
          travel managers, executives, students, sports teams, and everything
          in-between. We provide shuttles, car services, private cars, buses and
          everything else you need for your business trips, events, and more.
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant={"default"}
            className="relative overflow-hidden cursor-pointer rounded-full text-black flex items-center gap-2 sm:w-[240px] group"
            onClick={() => router.push("/business-solutions")}
          >
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Explore our business solutions
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Explore our business solutions
            </span>
          </Button>

          <Button
            variant={"outline"}
            className="relative sm:w-[156px] cursor-pointer border-gray-900 rounded-full font-bold flex items-center gap-2 group overflow-hidden"
            //onClick={() => {}}
          >
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Get a quote
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Get a quote
            </span>
            
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
              {/* <MarqueeImages data={OurPartnersData}  /> */}
              <div className="w-full flex justify-between items-center mb-8 flex-wrap gap-3 my-2 sm:gap-24 space-y-2 sm:space-y-0 mt-6 sm:mt-8 sm:h-[144px]">
                <PartnersLogo data={NewPartnerLogos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
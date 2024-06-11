'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import {  NewPartnerLogos } from './data';
import { useRouter } from 'next/navigation'
import SwipeWordAnimation from "../WordSwipe";
import PartnersLogo from '../common/partners';
import ModalComponent from '../Modal';
import BookNowForm from '../Forms/BookNowForm';
import Marquee from '../common/Marquee';
import { useModal } from '@/contexts/ModalContext';
import { useEventModal } from '@/contexts/EventModalContext';
const HeroComponent = () => {
  const router = useRouter()
  const { showModal } = useModal();

  return (
    <>
      <div className="w-full mt-5 sm:mt-10">
        <div className="px-4 sm:px-20 w-full flex flex-col">
          <div className="w-full mt-10 sm:mt-[108px]">
            <SwipeWordAnimation />
          </div>
          <div className="mt-6 mb-14 sm:text-left sm:max-w-[1016px] text-xl text-[#6F7174]">
            We specialize in efficient and reliable personal and group
            transportation across Africa. We&lsquo;ve helped move over 4 million
            people to events, conventions, and conferences across 16 cities in 4
            continent.
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant={"default"}
              className="relative overflow-hidden sm:w-[249px] sm:h-[64px] text-center items-center sm:px-[17px] group"
              onClick={() => router.push("/business-solutions")}
            >
              <p className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                Explore our business solutions
              </p>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                Explore our business solutions
              </span>
            </Button>
            <Button
              variant={"outline"}
              className="relative sm:w-[156px] sm:h-[64px] group overflow-hidden"
              onClick={showModal}
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
              sizes="100vw"
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
                  Our commitment to providing structured, accessible, and
                  predictable corporate mobility solutions has made us the
                  leading shared mobility platform in Africa.
                </p>
              </div>
              <div className="flex justify-center w-full flex-col sm:max-w-[1252px] mx-auto h-fit">
                <p className="font-semibold text-[#6F7174] w-full text-center">
                  Trusted by Your Favorite Businesses
                </p>
                <Marquee data={NewPartnerLogos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;

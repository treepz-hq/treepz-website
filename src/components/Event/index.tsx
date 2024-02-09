'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from '../Hero/partners';
import { OurPartnersData } from '../Hero/data';
import Postal from '../common/card';
import { EventUniqueData, AccordionData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRight from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from './techs'
import BetterTogetherComponent from '@/components/Trips';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const EventComponent = () => {
  return (
    <div>
      <div className="bg-[url(/Hero.png)] bg-cover bg-no-repeat w-full h-[519px] sm:h-[708px]">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[100px] px-4">
          <h1 className="font-bold text-[38px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            Event Transportation Service by Treepz
          </h1>
          <p className="text-base sm:text-xl text-center">
            Treepz is the ultimate ground transportation solution for corporate
            travel managers, executives, students, sports teams, and everything
            in-between. We provide shuttles, car services, private cars, buses
            and everything else you need for your business trips, events, and
            more.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[297px] mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"
            //onClick={() => {}}
          >
            Book your event transportation service
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Trusted by Your Favorite Businesses
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {OurPartnersData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[408px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6">
          Our unique capabilities
        </h1>
        <p className="text-xl text-[#4D5154]">
          We&lsquo;re different from your average transportation provider, and
          working with us is more than just a quick transaction. Our dedicated
          team is ready to tailor our services exactly to your transportation
          needs.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {EventUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="bg-black">
        <div className="container px-4 sm:px-20 py-[50px] text-white flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[30px] sm:text-[40px] font-medium leading-[48px] text-white">
            Get a Free Quote Right Away
          </h1>
          <div className="flex w-full sm:w-[355px] justify-between items-center mt-4">
            <div className="flex gap-8 w-full">
              <div>
                <TimerIcon />
              </div>
              <div className="flex flex-col w-full sm:w-[111px] text-sm">
                It takes less than
                <span className="font-medium text-base">3 minutes</span>
              </div>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2"
              //onClick={() => {}}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FDF2D0] w-full">
        <div className="container px-4 sm:px-20 flex justify-between flex-col sm:flex-row">
          <div className="py-4 sm:py-[120px] flex flex-col">
            <h1 className="font-bold mb-2 sm:mb-6">
              Dive Deeper into Treepz&lsquo;s Event Transportation Services
            </h1>
            <p className="text-xl">
              Our services are trusted by many. Experience the unique Treepz
              touch that elevates us in the industry.
            </p>

            <div className="w-full sm:w-[280px] h-[56px] mt-[20px] sm:mt-[89px] relative">
              <Image
                src="/google-rating.png"
                alt="google rating"
                fill
                priority
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="w-full h-[670px] relative">
            <Image
              src="/bus-route.png"
              alt="Bus routing"
              fill
              priority
              className="absolute object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20">
        <div className="flex flex-col w-full sm:w-[336px] gap-5 sm:gap-14">
          <h1 className="text-[30px] sm:text-[40px] text-[#212529] font-bold uppercase leading-[48px]">
            EVErYTHING YOU NEED TO KNOW
          </h1>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-[200px] text-gray-900 flex items-center gap-2"
            //onClick={() => {}}
          >
            Contact our team
            <ChevronRight />
          </Button>
        </div>
        <div className="w-full sm:w-[756px] mt-10 sm:mt-0">
          <Accordion type="single" collapsible>
            {AccordionData.map(({ title, content }, index) => (
              <AccordionItem value={title + index} key={index}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <TechCommLogos />
      <BetterTogetherComponent />
    </div>
  );
}

export default EventComponent
'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { StaticPartnersData } from '../Hero/data';
import Postal from '../common/card';
import { EventUniqueData, AccordionData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRight from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import StaticPartners from '../common/static-partners';


const EventComponent = () => {
    const {showModal} = useModal()
  return (
    <div>
      <div className="bg-[url(/Hero.png)] bg-cover bg-no-repeat w-full h-[519px] sm:h-[708px] sm:mt-20">
        <div className="w-full sm:w-[724px] mx-auto text-white pt-[60px] sm:pt-[184px] px-4">
          <h1 className="font-bold text-[38px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            Event Transportation Service by Treepz
          </h1>
          <p className="text-base sm:text-xl text-center">
            Plan seamless event transportation with Treepz. We offer diverse
            options like shuttles, cars, and buses, catering to any group size
            and budget. Experience reliable rides and dedicated support for
            stress-free events.
          </p>
          <div className="flex justify-center w-full">
            <Button
              variant={"default"}
              className="w-full sm:w-[337px] mx-auto mt-8 sm:mt-[52px] sm:h-[64px] font-semibold group overflow-hidden relative"
                            onClick={showModal}
              //onClick={() => {}}
            >
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                Book your event transportation service
              </span>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                Book your event transportation service
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Trusted by Your Favorite Businesses
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {StaticPartnersData.map(({ src }: any) => (
            <StaticPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[408px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6">
          Our unique capabilities
        </h1>
        <p className="text-xl text-[#4D5154] text-center">
          Treepz doesn&lsquo;t just move you, we work with you to understand your
          unique needs and craft a custom solution that exceeds expectations.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex  sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {EventUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <GetAQuote />
      <UserRoutesComponent
        title="Dive Deeper into Treepz&lsquo;s Event Transportation Services"
        desc="Our services are trusted by many. Experience the unique Treepz
              touch that elevates us in the industry."
      />

      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20">
        <div className="flex flex-col w-full sm:w-[336px] gap-5 sm:gap-14">
          <h1 className="text-[30px] sm:text-[40px] text-[#212529] font-bold uppercase leading-[48px]">
            EVErYTHING YOU NEED TO KNOW
          </h1>
          <Button
            variant={"default"}
            className="w-fit sm:w-[200px]"
onClick={showModal}
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
                <AccordionContent className="text-lg text-[#6F7174]">
                  {content}
                </AccordionContent>
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

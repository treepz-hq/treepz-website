'use client'
import { OurPartnersData } from "../Hero/data";
import OurPartners from "../Hero/partners";
import { Button } from "../ui/button";
import Image from 'next/image';

import Investors from "../common/investors";
import OurValues from "../common/ourValues";
import OurStory from "./../common/ourStory";
import MeetOurTeams from "./../common/teams";
import Counter from "@/components/About/counter";

import { CounterData } from '@/lib/dummyData'

const AboutComponent = () => {
    return (
      <>
        <div className="sm:bg-[url(/about_us.png)] bg-no-repeat sm:h-[704px] bg-contain bg-right">
          <div className="w-full sm:w-[940px] px-4 sm:px-20 my-10 sm:my-[85px] flex justifiy-center flex-col">
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full bg-[#FDF2D0] flex items-center gap-2 w-[155px] mx-auto sm:mx-0 mb-[12px] uppercase text-[#A57F0C]"
              //onClick={() => {}}
            >
              our mission
            </Button>
            <h1 className="text-[32px] sm:text-[56px] text-center sm:text-left font-bold leading-[40px] sm:leading-[64px] uppercase text-[#212529]">
              we put Africa&lsquo;s 26 million vehciles to better use.
            </h1>
          </div>
          <div className="w-full sm:w-[940px] px-4 sm:px-20">
            <h2 className="mb-[12px] uppercase text-[#A57F0C]">our vision</h2>
            <h1 className="text-xl w-full sm:w-[452px] text-[#212529]">
              To ensure wherever you are, you can book and pay for the perfect
              vehicle to explore Africa with our reliable Treepz hosts.
            </h1>
          </div>
          <div className="sm:hidden h-[322px] w-full relative bg-right">
            <Image src="/about_us.png" alt="about" fill priority className="object-contain bg-right absolute" />
          </div>
        </div>
        <div className="container px-4 sm:px-20 sm:mx-auto flex flex-col sm:flex-row justify-between sm:items-center my-4 sm:my-10">
          <p className="w-[306px] text-base sm:text-2xl font-medium text-[#6F7174]">
            We support the productivity of Africa&lsquo;s big teams
          </p>
          <div className="w-full sm:w-[671px] gap-4 sm:gap-2 flex-wrap mt-4 sm:mt-0 flex">
            {OurPartnersData.map(({ src }: any) => (
              <OurPartners src={src} key={src} />
            ))}
          </div>
        </div>
        <OurStory />
        <OurValues />
        <Investors />
        <MeetOurTeams />
        <div className="bg-[#F7F7F7] w-full my-20 sm:my-[183px]">
          <div className="container px-4 sm:px-20 sm:py-14 flex flex-col sm:flex-row justify-between items-center">
            {CounterData.map(({ count, text }) => (
              <Counter count={count} text={text} key={text} />
            ))}
          </div>
        </div>
        <div className="bg-[url(/join-mob-bg.png)] sm:bg-[url(/join-bg.png)] bg-contain relative bg-no-repeat w-[343px] sm:w-[1200px] mx-auto h-[302px] sm:h-[270px]">
          <div className="sm:bottom-4 w-full flex flex-col sm:flex-row justify-between items-center text-white absolute px-10 mt-[30px] sm:mt-0">
            <h1 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] text-white uppercase">
              <span className="text-[#A0A3A6]">Join</span> our team
            </h1>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-[16px] sm:rounded-full flex items-center font-semibold gap-2 w-[240px] mb-[12px] mt-8 sm:mt-0 text-gray-900"
              //onClick={() => {}}
            >
              View open roles
            </Button>
          </div>
        </div>
      </>
    );
}

export default AboutComponent

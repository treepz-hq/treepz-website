'use client'
import { Button } from "../ui/button";
import Image from 'next/image';

import Investors from "../common/investors";
import OurValues from "../common/ourValues";
import OurStory from "./../common/ourStory";
import MeetOurTeams from "./../common/teams";
import Counter from "@/components/About/counter";

import { CounterData } from '@/lib/dummyData'
import PartnersLogo from "../common/partners";
import { NewPartnerLogos } from "./data";
/* sm:bg-[url(/about_us.png)] */
const AboutComponent = () => {
    return (
      <>
        <div className="bg-gradient-to-t to-[#FDF2D052] from-[#FDF2D000]  via-[#ffffff] bg-no-repeat sm:h-[704px] sm:mt-20 flex flex-col sm:flex-row">
          <div className="w-full sm:w-[776px] px-4 sm:pl-20 my-10 sm:my-[85px] flex justify-center flex-col">
            <div className="bg-[#FDF2D0] flex items-center gap-2 w-[155px] h-10 text-xl rounded-full mx-auto sm:mx-0 mb-[12px] uppercase text-[#A57F0C] py-2 px-3">
              our mission
            </div>
            <h1 className="text-[32px] sm:text-[56px] text-center sm:text-left font-bold leading-[40px] sm:leading-[64px] uppercase text-[#212529] w-full sm:w-[776px]">
              to empower 1 million daily commuters with the options to move
              better in africa
            </h1>
            <div className="w-full sm:w-[484px] rounded-[12px] bg-white border border-[#FDF2D0] gap-4 p-4 mt-10 sm:mt-[75px]">
              <h2 className="mb-4 uppercase text-[#A57F0C]">our vision</h2>
              <h1 className="text-xl w-full text-[#212529]">
                We are building a future where your ability to move freely
                aligns with shared values of sustainability, safety and
                community.
              </h1>
            </div>
          </div>
          <div className="h-[322px] sm:h-[774.827px] w-full sm:w-[718px] relative bg-right">
            <Image
              src="/about_us.png"
              alt="about"
              sizes="100vw, 100vh"
              fill
              priority
              className="bg-right absolute object-contain"
            />
          </div>
        </div>
        <div className="container px-4 sm:px-20 sm:mx-auto flex flex-col sm:flex-row justify-between sm:items-center my-4 sm:my-[76.17px]">
          <p className="w-full sm:w-[306px] text-base sm:text-2xl font-medium text-[#6F7174]">
            We support the productivity of Africa&lsquo;s big teams
          </p>
          <div className="w-full sm:w-[855.15px] justify-between sm:justify-start space-y-6 sm:space-y-0 sm:gap-x-[62.2px] flex-wrap mt-4 sm:mt-0 flex">
            <PartnersLogo data={NewPartnerLogos} />
          </div>
        </div>
        <OurStory />
        <OurValues />
        <Investors />
        <MeetOurTeams />
        <div className="bg-[#F7F7F7] w-full my-20 sm:my-[231px]">
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
              className="w-fit sm:w-[240px] mb-3 mt-8 sm:mt-0 py-4 px-6 font-semibold relative overflow-hidden group h-14"
              //onClick={() => {}}
            >
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                View open roles
              </span>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                View open roles
              </span>
            </Button>
          </div>
        </div>
      </>
    );
}

export default AboutComponent

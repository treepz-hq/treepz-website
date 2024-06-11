"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import OurPartners from "../Hero/partners";
import Postal from "../common/card";
import {
  UniversityUniqueData,
  AccordionData,
  MiniPartnerData,
} from "@/lib/dummyData";
import TimerIcon from "@/assets/svgs/timer.svg";
import ChevronRightIcon from "@/assets/svgs/chervon-right-nav.svg";
import TechCommLogos from "@/components/common/techs";
import BetterTogetherComponent from "@/components/Trips";
import PopularCitiesCarousel from "@/components/common/PopularCitiesCarousel";
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from "@/contexts/ModalContext";
const NeededInformations = [
  "Why Use Treepz for Your Intercampus Shuttle Services?",
  "Support Your Local Business!",
  "Frequently Asked Questions",
  
];

const UniversityComponent = () => {
    const {showModal} = useModal()
  return (
    <div>
      <div className="bg-[url(/university-hero.png)] bg-cover bg-no-repeat w-full h-[650px] sm:h-[708px]">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[100px] px-4">
          <h1 className="font-bold text-[28px] leading-[40px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
          Treepz Shuttle: Campus hustle made easy.
          </h1>
          <p className="text-base sm:text-xl text-center">
   Campus life is filled with packed schedules: Juggling classes, clubs, events, and maybe some fun on the side? Treepz gets it. Our intercampus shuttle fits seamlessly into your busy world, getting you where you need to be – fast, stress-free, and ready to conquer your day.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-fit mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2 mb-11 sm:mb-0"
onClick={showModal}
            //onClick={() => {}}
          >
            Speak to Treepz
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <h1 className="text-[32px] font-bold leading-[40px] text-[#212529] my-8 w-full text-center">
          Why Choose Treepz for Your Campus Transportation?
        </h1>
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Trusted by the Best in Business
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {MiniPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[641px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6 text-center">
          Make it a Smart Move
        </h1>
        <p className="text-xl text-[#4D5154] text-center">
          Treepz specializes in providing top-of-the-class intercampus shuttle
          services for students and faculty across the United States. With our
          broad fleet of modern vehicles and dedicated team of experienced
          travel coordinators, we ensure you travel in comfort and safety across
          campuses. From regular classes to special university events, when it
          comes to getting you there efficiently, we&lsquo;re at the head of the
          class.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {UniversityUniqueData.map(({ icon, title, description }) => (
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
        title="Treepz’s Campus Shuttle Service – The Scholarly Choice"
        desc="Our team is available 24/7, ready to provide you with prompt and
              helpful support – perhaps even a virtual high-five for acing your
              latest exam. Here are more reasons to choose Treepz, then get in
              touch to see how we can facilitate your academic journey." 
      />
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg bg-white sticky top-16 sm:top-24">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <Link
              href={`#info-${index + 1}`}
              className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0">
          <h1
            className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6"
            id="info-1"
          >
            Why Use Treepz for Your Intercampus Shuttle Services?
          </h1>
          <h2 className="text-2xl font-semibold my-4">
            All-Powerful Travel Management
          </h2>
          <div className="space-y-6 text-[#6F7174] text-lg border-b pb-11">
            <p>
              Treepz arranges travel plans for students and faculty commuting
              between campuses, providing budget-friendly and meticulously
              organized schedules. We have solutions to simplify your students’
              life, whether you need transportation for a single day or the
              entire semester.
            </p>
          </div>
          <div className="flex flex-col space-y-6 mt-12" id="info-4">
            <h2 className="font-semibold text-xl sm:text-2xl">
              KPI Loaded Passenger App
            </h2>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                Treepz provides a centralized booking hub where you can set your
                KPIs, track your journeys, modify your details, see your
                drivers, and manage every aspect of your travel in one place.
                This gives you the visibility you need and allows you to
                streamline future journeys, saving you time and money.
              </p>
            </div>
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Risk Management and Care Plan
            </h2>
            <p>
              Your students’ well-being is of utmost importance to us. We take
              extra care to monitor any travel risks and provide real-time
              alerts, and emergency assistance, ensuring all passengers are safe
              on every trip.
            </p>
          </div>
          <div
            className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6"
            id="info-2"
          >
            <h2 className="font-semibold text-xl sm:text-2xl">
              Support Your Local Business!
            </h2>
            <p>
              By using Treepz’s intercampus shuttle services, you are also
              supporting the local business owners in your area. We are
              passionate advocates for local businesses worldwide, so we
              carefully select a network of local drivers who are:
            </p>
            <ul className="list-disc list-inside">
              <li>Screened small business owners</li>
              <li>Background checked and fully insured</li>
              <li>Committed to providing excellent transportation</li>
              <li>
                Equipped with Treepz’s cutting-edge technology for a stellar
                experience
              </li>
            </ul>
          </div>
          <div
            className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6"
            id="info-3"
          >
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Frequently Asked Questions
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl">
              I need to plan multiple journeys over a semester – how can I do
              this?
            </h2>
            <p>
              We can cater to any number of journeys and any number of vehicle
              sizes. Talk to us about your schedule and we will come up with a
              schedule just for you.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              We have a small group – do you have smaller buses?
            </h2>
            <p>
              Absolutely, let us know how many are in your group and if you have
              any special travel needs, and we will find the best mini shuttle
              for you.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Do I need a coordinator for my travel service?
            </h2>
            <p>
              We recommend using one of our logistics coordinators as part of
              your intercampus shuttle services – simply for your complete peace
              of mind.
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]" 
                        onClick={showModal}
            //onClick={() => {}}
          >
            Contact us
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 w-full sm:max-w-[1022px] mx-auto flex flex-col">
        <h1 className="font-semibold text-xl sm:text-2xl mb-6">
          Explore our most popular cities
        </h1>
        <p>
          Working with you is more than just a quick transaction to us. Our
          dedicated and experienced team always makes sure that we tailor
          exactly to your specific needs.
        </p>
      </div>
      <div className="mt-20">
        <PopularCitiesCarousel />
      </div>

        </div>
  );
};

export default UniversityComponent;

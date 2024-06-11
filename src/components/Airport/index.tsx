/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { Button } from '../ui/button';
import OurPartners from '@/components/Hero/partners';
import Postal from "../common/card";
import { AirportUniqueData, MiniPartnerData } from "@/lib/dummyData";
import Image from 'next/image';
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TimerIcon from '@/assets/svgs/timer.svg'
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import TechCommLogos from '@/components/common/techs';
import BetterTogetherComponent from '@/components/Trips';
import Link from 'next/link'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from "@/contexts/ModalContext";
import { useRouter } from 'next/navigation'

const NeededInformations = [
  "Why Use an Airport Transport Service?",
  "More than A to B",
  "Supporting Your Fellow Business Owners",
  "A Deeper Dive into Treepz for Business"
];

const AirportTransComponent = () => {
  const router = useRouter();
  const { showModal } = useModal();

  return (
    <>
      <div className="bg-[url(/airport-hero.png)] bg-no-repeat bg-cover w-full text-white flex flex-col justify-center items-center py-[62px] sm:py-[176px] mt-5 sm:mt-20">
        <div className="mb-13 flex flex-col w-full sm:w-[783px] text-center">
          <h1 className="text-[36px] sm:text-[56px] font-bold leading-[40px] sm:leading-[64px] uppercase text-center w-full">
From touchdown to town
          </h1>
          <p className="text-base text-center sm:text-xl mt-[20px] sm:mt-[28px]">
           Leave the airport hassle behind: Book your stress-free ride with Treepz.
          </p>
        </div>
        <Button
          variant={"default"}
          className="cursor-pointer rounded-full text-gray-900 w-fit flex items-center font-medium gap-2 mt-14"
                    onClick={showModal}
          //onClick={() => {}}
        >
       Book Now 
        </Button>
      </div>
      <h1 className="text-2xl sm:text-[32px] leading-[40px] font-bold mt-[56px] sm:mt-[96px] sm:mb-[42px] w-full text-center">
        Why Choose Treepz for Business?
      </h1>
      <div className="container px-4 sm:px-20 flex flex-col mt-[75px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
We are used by the best airlines cin business
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center ">
          {MiniPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-6 justify-center items-center sm:max-w-[1022px] sm:mx-auto">
        <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] text-[#212529] uppercase font-bold text-center">
 Arrive Feeling Refreshed
        </h1>
        <p className="text-sm sm:text-xl text-[#4D5154] px-4 sm:px-0 text-center  ">
     Business travel shouldn't start with airport chaos. Partner with Treepz for optimized costs, guaranteed safety, and a seamless arrival experience for you and your team. 
        </p>
      </div>
      {/* School category */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {AirportUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="w-full h-[52px] mt-10 relative">
        <Image
          src="/blue-blur-rect.png"
          fill
          sizes="100vw, 100vh"
          priority
          className="absolute object-fill"
          alt="rect"
        />
      </div>
      <GetAQuote />
      <UserRoutesComponent 
        title="Treepz for Business" 
        desc="Vehicles provided by specialized travel management companies or
              TMCs like Treepz (hey there) will help your business effectively
              manage your travel-related activities – from events and
              conferences to those stressful daily commutes."  />
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
Why Use an Airport Transport Service?
          </h1>
          <p className="text-base sm:text-xl mt-[20px] sm:mt-[28px] text-[#6F7174]">
       Imagine: happy arrivals, boosted productivity, and reduced costs. Treepz handles everything - reliable rides, pro drivers, user-friendly app, all for a smooth touchdown. Let's talk and see how we can empower your team and your business.
          </p>
        
          <div className="w-full sm:h-[328px] my-6 sm:my-14 relative overflow-hidden rounded-2xl">
            <Image
              src="/airport-1.png"
              alt="employee"
              fill
              sizes="100vw, 100vh"
              priority
              className="object-cover absolute"
            />
          </div>
          <div className="w-full flex flex-col border-t pt-14">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6" id="info-2">
              More than A to B
            </h1>
            <p className="text-base sm:text-xl mt-[20px] sm:mt-[28px] text-[#6F7174]">
              Treepz was born out of a desire to improve on what’s come before –
              to create the next generation of on-demand transportation using
              the best quality drivers and vehicles, specially engineered
              technology, and friendly experts who will support you every mile
              of your journey.
            </p>
            <p className="text-base sm:text-xl mt-[20px] sm:mt-[28px] text-[#6F7174]">
              Treepz’s business travel options offer tons of benefits to your
              business – more than giving your employees a ride from one place
              to another. We help you with hugely vital considerations like cost
              savings, efficient travel planning, compliance with your travel
              policies, and way happier employees
            </p>
            <p className="text-base sm:text-xl mt-[20px] sm:mt-[28px] text-[#6F7174]">
              Not only that, we let you focus on your core operations so you can
              leave the complex travel management tasks to us, the experts!
            </p>
          </div>
          <div className="mt-6 flex flex-col border-b pb-10">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              Your Benefits at a Glance
            </h1>
            <li>Flexible billing</li>
            <li>Budget-friendly</li>
            <li>Corporate account options</li>
            <li>Company policy-friendly</li>
            <li>Clear, dependable invoicing</li>
            <li>Super-easy approval and payment</li>
            <li>Global coverage for all you jet setters</li>
            <li>Flawless track record with all your favorite brands</li>
            <li>Professional, background-checked drivers</li>
            <li>Sustainable cars, green credentials galore</li>
            <li>A dedicated team of lovely, experienced travel coordinators</li>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-medium text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
              onClick={showModal}
            >
              Get a quote
              <ChevronRightIcon />
            </Button>
            <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
              <Image
                src="/executive-bg.png"
                alt="employee"
                fill
                sizes="100vw, 100vh"
                priority
                className="object-cover absolute"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col border-b pb-10" id="info-3">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              Supporting Your Fellow Business Owners
            </h1>
            <p>
              When you use Treepz for business, you will also be doing the very
              wonderful thing of supporting small, local business owners in your
              chosen area. That’s because Treepz is a passionate advocate and
              broker for small business owners all over the world.
            </p>
            <p className="my-2">
              We carefully select the best network of local drivers who are:
            </p>

            <li>Vetted small business operators</li>
            <li>Background checked and insured</li>
            <li>People who give a damn about amazing transportation</li>
            <li>
              Empowered with Treepz technology to provide a 5-star experience
            </li>
          </div>

          <div className="mt-6 flex flex-col border-b pb-10" id="info-4">
            <h1 className="font-semibold text-xl sm:text-[28px] mb-6">
              A Deeper Dive into Treepz for Business
            </h1>
            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Business Travel Management
            </h1>
            <p>
              Treepz manages all aspects of business travel, including sourcing
              ground transportation and carrying out travel itinerary planning.
              We see it as our top priority to ensure that your travel
              arrangements are made according to your company&lsquo;s travel
              policy and budget.
            </p>

            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Corporate Event Planning
            </h1>
            <p>
              Our corporate event planning services cover the organization and
              management of your business events such as conferences, meetings,
              and trade shows. We will assist with all the logistics, attendee
              registration, and even promote our services to your team.
            </p>

            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Group Travel Management
            </h1>
            <p>
              Treepz arranges travel plans for groups of employees attending the
              same event or traveling for team-building activities, and we
              always ensure that group travel arrangements are cost-effective
              and well-organized.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Employee Relocation Services
            </h1>
            <p>
              Employee relocation services help you manage the process of
              relocating employees, both domestically and internationally – and
              all the transportation arrangements you make with Treepz will make
              the relocation process smooth for both you and the employee.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Travel Policy Compliance
            </h1>
            <p>
              Treepz’s easy and transparent booking process means all your trips
              will fit in with your company&lsquo;s guidelines – preventing any
              dreaded unauthorized expenses or overspending.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Reporting and Analytics
            </h1>
            <p>
              Treepz will provide your business with detailed reports and
              analytics to help you monitor travel expenses and identify
              cost-saving opportunities, so you can make informed decisions and
              optimize your travel programs.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl my-6">
              Risk Management and Duty of Care
            </h1>
            <p>
              The safety and well-being of your employees are so important to us
              – so, Treepz will monitor the travel risks and provide real-time
              alerts, emergency assistance, and support to ensure all your
              employees are safe during their trips.
            </p>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-medium text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
                            onClick={showModal}
              //onClick={() => {}}
            >
              Change your travel plans
              <ChevronRightIcon />
            </Button>
          </div>
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
      <TechCommLogos />
      <BetterTogetherComponent />
    </>
  );
}

export default AirportTransComponent

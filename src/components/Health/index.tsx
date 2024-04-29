'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from '../Hero/partners';
import Postal from '../common/card';
import { HealthUniqueData, AccordionData, MiniPartnerData, HealthPartnerData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import Link from 'next/link'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';

const NeededInformations = ["Why Use a Corporate Travel Service?", "More than A to B", "Supporting Your Fellow Business Owners", "A Deeper Dive into Treepz for Business"];

const HealthTranspComponent = () => {
    const { showModal } = useModal();

  return (
    <div>
      <div className="bg-[url(/health-hero.png)] bg-cover bg-no-repeat w-full h-fit sm:h-[707px] mt-10 sm:mt-20">
        <div className="w-full sm:w-[920px] mx-auto text-white py-[80px] sm:pt-[199px] px-4">
          <h1 className="font-bold text-[28px] sm:text-[54px] leading-[32px] sm:leading-[56px] mb-[28px] uppercase text-center">
            The Best in healthcare Transportation
          </h1>
          <p className="text-base sm:text-lg text-center w-full sm:w-[614px] mx-auto">
           More than a ride, it&lsquo;s a healing journey. Experience compassionate medical transportation with Treepz.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-fit sm:w-[152px] sm:mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"

                            onClick={showModal}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <h1 className="text-2xl text-[32px] sm:leading-[40px] font-bold uppercase text-center mb-8">
          Why Choose Treepz for business
        </h1>
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Companies who use Treepz
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {HealthPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[735px] mx-auto font-bold text-[20px] sm:text-[28px] leading-[32px] uppercase text-[#212529] mb-6 text-center">
          Let our dedicated team handle the transportation so you can focus on getting better.
        </h1>
        <p className="text-xl text-[#4D5154] text-center w-full sm:w-[1022px] mx-auto">
          Beyond just rides, Treepz optimizes patient journeys, saving valuable time and resources for both patients and healthcare providers.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {HealthUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <GetAQuote />
      <UserRoutesComponent title="Treepz for Business" desc="Vehicles provided by specialized travel management companies or
              TMCs like Treepz (hey there) will help your business effectively
              manage your travel-related activities – from events and
              conferences to those stressful daily commutes." />
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
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0" id="info-1">
         {/*  <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Why Use a Corporate Travel Service?
          </h1> */}
          {/* <div className="space-y-6 text-[#6F7174] text-lg border-b pb-11">
            <p>
              By all means, your business could cope without the use of
              corporate travel services but in our opinion, when it comes to
              running your business smoothly and profitably, there are too many
              reasons not to.
            </p>

            <p>
              Vehicles provided by specialized travel management companies or
              TMCs like Treepz (hey there) will help your business effectively
              manage your travel-related activities – from events and
              conferences to those stressful daily commutes.
            </p>

            <p>
              TMCs serve as a one-stop solution for businesses to streamline
              travel planning, bookings, and budget management. They also
              provide assistance with corporate event planning, group travel,
              and employee relocation. Sound good? Step this way…
            </p>
          </div> */}

          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/airport-1.png"
              alt="airport"
              fill
              priority
              className="object-contain absolute"
            />
          </div>
          <div className="mt-12 border-t border-[#DEE0E3]"></div>

          <div className="flex flex-col space-y-6 mt-12" id="info-2">
            <Button
                variant={"default"}
                className="cursor-pointer rounded-full text-gray-900 w-fit sm:w-[156px] flex items-center gap-2 sm:!h-[64px] mb-12"
                onClick={showModal}
              >
                Get a quote
              </Button>
              <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl border-b pb-11">
                <Image
                  src="/executive-bg.png"
                  alt="detail"
                  fill
                  sizes="100vw, 100vh"
                  priority
                  className="object-cover absolute"
                />
              </div>
            <div>
              <div className="border-b pb-11" id="info-3">
                <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
                  Supporting Your Fellow Business Owners
                </h1>
                <p className="text-[#6F7174] text-lg">
                  When you use Treepz for business, you will also be doing the
                  very wonderful thing of supporting small, local business
                  owners in your chosen area. That’s because Treepz is a
                  passionate advocate and broker for small business owners all
                  over the world.
                </p>
                <p className="text-[#6F7174] text-lg">
                  We carefully select the best network of local drivers who are:
                </p>
              </div>
              <p className="text-[#6F7174] text-lg">
                <li>Vetted small business operators</li>
                <li>Background checked and insured</li>
                <li>People who give a damn about amazing transportation</li>
                <li>
                  Empowered with Treepz technology to provide a 5-star experience
                </li>
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11" id='info-4'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              A Deeper Dive into Treepz for Business
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Business Travel Management
            </h2>
            <p className="text-lg text-[#6F7174]">
              Treepz manages all aspects of business travel, including sourcing
              ground transportation and carrying out travel itinerary planning.
              We see it as our top priority to ensure that your travel
              arrangements are made according to your company&lsquo;s travel
              policy and budget.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Corporate Event Planning
            </h2>
            <p className="text-lg text-[#6F7174]">
              Our corporate event planning services cover the organization and
              management of your business events such as conferences, meetings,
              and trade shows. We will assist with all the logistics, attendee
              registration, and even promote our services to your team.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Employee Relocation Services
            </h2>
            <p className="text-lg text-[#6F7174]">
              Employee relocation services help you manage the process of
              relocating employees, both domestically and internationally – and
              all the transportation arrangements you make with Treepz will make
              the relocation process smooth for both you and the employee.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Customizable Solutions
            </h2>
            <p className="text-lg text-[#6F7174]">
              Whatever your company&lsquo;s goals, culture, and budget, Treepz
              will take it all into account. Because we don’t only rely on
              state-of-the-art technology but a combination of tech and real,
              helpful people, every detail is covered
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Travel Policy Compliance
            </h2>
            <p className="text-lg text-[#6F7174]">
              Treepz’s easy and transparent booking process means all your trips
              will fit in with your company&lsquo;s guidelines – preventing any
              dreaded unauthorized expenses or overspending.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Reporting and Analytics
            </h2>
            <p className="text-lg text-[#6F7174]">
              Treepz will provide your business with detailed reports and
              analytics to help you monitor travel expenses and identify
              cost-saving opportunities, so you can make informed decisions and
              optimize your travel programs.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Risk Management and Duty of Care
            </h2>
            <p className="text-lg text-[#6F7174]">
              The safety and well-being of your employees are so important to us
              – so, Treepz will monitor the travel risks and provide real-time
              alerts, emergency assistance, and support to ensure all your
              employees are safe during their trips.
            </p>

            <Button
              variant={"default"}
              className="cursor-pointer rounded-full text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px] sm:h-[64px]"
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
    
    </div>
  );
};

export default HealthTranspComponent

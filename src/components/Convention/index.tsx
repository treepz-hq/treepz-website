'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import OurPartners from '../Hero/partners';
import { StaticPartnersDataForCon } from "../Hero/data";
import Postal from '../common/card';
import { ConventionUniqueData, AccordionData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import MiniStickyBarMenu from '@/components/common/MiniStickyBarMenu'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';
import StaticPartners from '../common/static-partners';


const NeededInformations = ["How Treepz Will Take Your Worries Away", "Treepz has the know-how", "Our conference shuttle services", "Tailor-made solutions", "Time and cost savings","Safety", "Choose your own vehicle","Carbon neutral","Options for convention shuttles","How much does it cost for convention transportation near me?", "Book EASY Convention Transporation"];

const ConventionComponent = () => {
   const { showModal } = useModal();
  return (
    <div>
      <div className="bg-[url(/Hero-convention.png)] bg-cover bg-no-repeat w-full h-[519px] sm:h-[708px] sm:mt-20">
        <div className="w-full sm:w-[914px] mx-auto text-white pt-[60px] sm:pt-[184px] px-4">
          <h1 className="font-bold text-[38px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            Treepz CONVENTION Transportation
          </h1>
          <p className="text-base sm:text-xl text-center">
            We don&lsquo;t just have cars, we have smooth-running machines that
            gets everyone where they need to be, on time and happy.
          </p>
          <div className="flex w-full justify-center">
            <Button
              variant={"default"}
              className="w-full sm:w-[172px] mx-auto mt-8 sm:mt-14 sm:h-[64px]"
              //onClick={() => {}}
            >
              Find out more
            </Button>
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Trusted by Your Favorite Businesses
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {StaticPartnersDataForCon.map(({ src }: any) => (
            <StaticPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1191px] space-y-6 mx-auto mb-10 sm:mb-[88px]">
        <h1 className="w-full mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6 text-center">
          Conventions are stressful enough. Let Treepz handle the logistics.
        </h1>
        <p className="text-xl text-[#4D5154] text-center mt-8">
          We go above and beyond to ensure your attendees arrive on time,
          relaxed, and ready to enjoy your event.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex  sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {ConventionUniqueData.map(({ icon, title, description }) => (
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
        title="Convention Transportation with Treepz"
        desc="Your ride, your style. Choose from hundreds of vehicles, dozens of designs, and endless amenity options to create your perfect travel experience."
      />
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <MiniStickyBarMenu data={NeededInformations} />

        <div className="w-full sm:w-[853px] mt-10 sm:mt-0" id="info-1">
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Book Treepz and Relax
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg">
            <p>
              Treepz specializes in managing the complexities of large-scale
              events. We understand your need for a reliable partner to
              seamlessly transport your delegates, guests, or teammates to
              conferences or conventions. Our expertise ensures a smooth,
              stress-free experience for everyone involved.
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
            //onClick={() => {}}
          >
            Get a quote
          </Button>
          <div className="w-full sm:h-[328px] relative">
            <Image
              src="/detail-img.png"
              alt="detail"
              fill
              sizes="100vw, 1000vh"
              priority
              className="object-contain absolute"
            />
          </div>

          <div className="flex flex-col space-y-6 mt-12" id="info-2">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              We are experts in the game
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                Leave the transportation logistics to us! Our meticulous
                planning starts with selecting local, professional drivers
                familiar with your event venue. These experts can handle complex
                multi-day itineraries and diverse trip types with ease.
                Additionally, dedicated onsite coordinators become an extension
                of your team, ensuring seamless transportation and the perfect
                vehicle selection for your convention.
              </p>
            </div>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Our conference shuttle services
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                Treepz is your trusted partner for large-scale event
                transportation. Our years of experience and proven track record
                ensure your attendees arrive on time, relaxed, and ready to
                participate. Let us handle the logistics so you can focus on the
                event&lsquo;s success.
              </p>
            </div>
          </div>
          <div className="mt-11 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Options
            </h1>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">
                School bus services
              </h1>
              <p className="text-lg text-[#6F7174]">
                Bus services for schools need a reliable, transparent, and safe
                system comprising common sense teamwork, experienced drivers,
                and real-time technology for peace of mind. Check them all off
                your list – Treepz has it covered.
              </p>
            </div>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">Bus rental</h1>
              <p className="text-lg text-[#6F7174]">
                If your school requires a bus for a special day out or field
                trip, why not take advantage of our bus rental services? One of
                the school’s designated drivers can transfer the kids from A to
                B with little fuss, so they can have a lot of fun when they get
                there.
              </p>
            </div>
            <div className="flex flex-col space-y-6 my-6" id="info-3">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Door-to-door school bus services
              </h1>
              <p className="text-lg text-[#6F7174]">
                Some of your students may need to be picked up from their homes
                rather than a collective bus stop or meeting point. That is
                completely fine, you can just let our team know any requirements
                like this and it will get built into your service.
              </p>
            </div>
            <div className="flex flex-col space-y-6" id="info-4">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Special needs transportation
              </h1>
              <p className="text-lg text-[#6F7174]">
                We can provide vehicles for groups of children who have special
                needs – perhaps a smaller vehicle is needed, or a vehicle with
                additional wheelchair or stroller access. Let us know what will
                work for your students and we will make it happen.
              </p>
            </div>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[260px] font-medium mt-8 sm:mt-6 text-black flex gap-2"
            //onClick={() => {}}
          >
            Get the there with Treepz
            <ChevronRightIcon />
          </Button>
          <div
            className="flex flex-col space-y-6 border-t mt-6 pt-6"
            id="info-5"
          >
            <h1 className="font-semibold text-xl sm:text-2xl">
              Treepz x Lagos Business School
            </h1>
            <p className="text-lg text-[#6F7174]">
              Treepz specializes in large events that are notoriously complex.
              We understand that you are looking for a reputable company that
              can take the strain away from you and take your delegates, guests,
              and teammates to a conference or convention.
            </p>
          </div>
          <div
            className="flex flex-col space-y-6 border-t mt-6 pt-6"
            id="info-6"
          >
            <h1 className="font-semibold text-xl sm:text-2xl">
              Book an ‘A’ in Transportation!
            </h1>
            <p className="text-lg text-[#6F7174]">
              Check out Treepz! You are in the right place, if you are looking
              for reliable private transportation services for school near
              me—you can simply contact us now for your FREE bespoke quote.
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[216px] font-semibold mt-8 sm:mt-6 text-black flex gap-2"
            onClick={showModal}
          >
            Get a custom quote
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

export default ConventionComponent
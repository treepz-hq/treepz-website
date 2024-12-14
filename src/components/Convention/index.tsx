/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import OurPartners from "../Hero/partners";
import { StaticPartnersDataForCon } from "../Hero/data";
import Postal from "../common/card";
import { ConventionUniqueData, AccordionData } from "@/lib/dummyData";
import TimerIcon from "@/assets/svgs/timer.svg";
import ChevronRightIcon from "@/assets/svgs/chervon-right-nav.svg";
import TechCommLogos from "@/components/common/techs";
import BetterTogetherComponent from "@/components/Trips";
import PopularCitiesCarousel from "@/components/common/PopularCitiesCarousel";
import MiniStickyBarMenu from "@/components/common/MiniStickyBarMenu";
import GetAQuote from "@/components/common/get-a-quote";
import UserRoutesComponent from "@/components/common/user-routes";
import { useModal } from "@/contexts/ModalContext";
import StaticPartners from "../common/static-partners";

const NeededInformations = [
  "How Treepz Will Take Your Worries Away",
  "Treepz has the know-how",
  "Our conference shuttle services",
  "Tailor-made solutions",
  "Time and cost savings",
  "Safety",
  "Choose your own vehicle",
  "Carbon neutral",
  "Options for convention shuttles",
  "How much does it cost for convention transportation near me?",
  "Book EASY Convention Transporation",
];

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
              onClick={showModal}
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
            onClick={showModal}
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
            <h1 id="info-3" className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Our conference shuttle services
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg">
              <p>
                Treepz is your trusted partner for large-scale event
                transportation. Our years of experience and proven track record
                ensure your attendees arrive on time, relaxed, and ready to
                participate. Let us handle the logistics so you can focus on the
                event&lsquo;s success.
              </p>
            </div>
          </div>
          <div className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              The Treepz difference
            </h1>
            <div className="flex flex-col space-y-6 ">
              <div className="text-lg text-[#6F7174]">
                <ul className="list-disc">
                  <li>24/7 travel support</li>
                  <li>Best price guarantee</li>
                  <li>Free cancellation</li>
                  <li>Endless options</li>
                  <li>Successful trips</li>
                  <li>BBB A+ accredited</li>
                  <li>
                    Trusted by small businesses to Fortune 500 companies alike
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="info-4" className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Tailor-made solutions
            </h1>
            <div className="flex flex-col space-y-6 ">
              <div className="text-lg text-[#6F7174]">
                <p>
                  Got special requirements? We can take care of them – just talk
                  to our team at Treepz and request a FREE, customized quote for
                  your convention transportation. Every trip we take you on will
                  be:
                </p>
                <ul className="list-disc space-y-3">
                  <li>Comfortable</li>
                  <li>Safe</li>
                  <li>Reliable</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="info-5" className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Time and cost savings
            </h1>
            <div className="">
              <div className="text-lg text-[#6F7174]">
                <ul className="list-disc space-y-6">
                  <li>
                    Save driving time – we have only professional and
                    experienced chauffeurs who know exactly how to get from A to
                    B without running into X, Y, or Z
                  </li>
                  <li>
                    Save your research time – just check out our excellent
                    reviews from past customer conventions in locations such as
                    Los Angeles, Atlanta, San Francisco, New York, Miami, and
                    more{" "}
                  </li>
                  <li>
                    Save money – because we use the best routing options to make
                    sure you don’t pay for a vehicle when you don't need to
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[328px] relative w-[343px] sm:w-[500px] mt-[40px]  md:w-[853px]">
              <Image
                src="/conference-hero.png"
                alt="Convention"
                layout="fill"
              />
            </div>
          </div>
          <div id="info-6" className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Safety
            </h1>
            <div className="flex flex-col space-y-6 ">
              <div className="text-lg text-[#6F7174]">
                You are covered by top insurance and you will be driven by
                top-of-the-line drivers using the best GPS software.
              </div>
            </div>

            <h1 id="info-7" className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] my-6">
              Choose your own vehicles
            </h1>

            <div className="flex flex-col space-y-6 ">
              <div className="text-lg text-[#6F7174]">
                Choose from a selection of sprinter vans, charter buses,
                mini-coaches, limousines, SUVs, sedans, party buses, and transit
                buses.{" "}
              </div>
            </div>
          </div>{" "}
          <div id="info-8" className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Carbon neutral
            </h1>
            <div className="">
              <div className="text-lg text-[#6F7174]">
                We pledge that every trip booked with Treepz will support the
                fight against climate change. Find out more here - Treepz Rides
                are now 100% Carbon Neutral
              </div>
            </div>
            <div className="h-[328px] relative w-[343px] sm:w-[500px] mt-[40px]  md:w-[853px]">
              <Image src="/carbon.png" alt="Carbon" layout="fill" />
            </div>
          </div>
          <div id="info-9"  className="mt-[24px] border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Options for Convention shuttles
            </h1>
            <div className="">
              <div className="text-lg text-[#6F7174]">
                <ul className="list-disc ">
                  <li>Airport transfers & hotel shuttles</li>
                  <li>VIP sedan, SUV, and limo tranfers</li>
                  <li>Convention center to hotel shuttles</li>
                  <li>Hotel-to-hotel shuttles</li>
                  <li>
                    Local convention center for group tours, sightseeing,
                    events, conferences, field trips, and corporate events
                  </li>
                </ul>
                <p className="my-6">
                  All of our vehicles are classy and comfy – you will enjoy
                  premium seating with lots of legroom, perfect air temperature
                  control, restrooms, entertainment systems, and that
                  all-important Wi-Fi access.
                </p>
              </div>
              <Button
                className="bg-[#F8B02B] flex py-[16px] px-5 font-semibold rounded-[32px]"
                onClick={showModal}
              >
                {" "}
                Get a customized quote{" "}
                <ChevronRightIcon className="ml-2 w-6 h-6" />{" "}
              </Button>
            </div>
          </div>
   <div id="info-10" className="mt-[24px] border-b pb-11">
        <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
          How much does it cost for convention transportation near me?
        </h1>
        <div className="flex flex-col space-y-6 ">
          <div className="text-lg text-[#6F7174]">
            The cost of your convention transportation depends on a few things
            like where you need your passengers to go, how long the conference
            shuttle service is running, and how many vehicles you require.
            Contact Treepz to request a FREE, bespoke quote for your conference
            transportation.
          </div>
        </div>
      </div>{" "}
      <div id="info-11"  className="mt-[24px]  pb-11">
        <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
          Book EASY Convention Transportation
        </h1>
        <div className="flex flex-col space-y-6 mb-[40px] ">
          <div className="text-lg text-[#6F7174]">
            Don't hesitate. Discover our convention transportation services
          </div>
        </div>
        <Button
          className="bg-[#F8B02B] flex py-[16px] px-5 font-semibold rounded-[32px]"
          onClick={showModal}
        >
          {" "}
          Book easy convention transportation{" "}
          <ChevronRightIcon className="ml-2 w-6 h-6" />{" "}
        </Button>
      </div>{" "}

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

export default ConventionComponent;


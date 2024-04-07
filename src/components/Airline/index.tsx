"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import OurPartners from "../Hero/partners";
import Postal from "../common/card";
import {
  AirlineUniqueData,
  AccordionData,
  MiniPartnerData,
} from "@/lib/dummyData";
import TimerIcon from "@/assets/svgs/timer.svg";
import ChevronRightIcon from "@/assets/svgs/chervon-right-nav.svg";
import TechCommLogos from "@/components/common/techs";
import BetterTogetherComponent from "@/components/Trips";
import PopularCitiesCarousel from "@/components/common/PopularCitiesCarousel";
import Link from 'next/link'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'

const NeededInformations = [
  "Recurring Airport Shuttle Journeys",
  "Hotels with Airport Shuttle: Take Convenience to New Heights",
  "Our Airport Services in More Detail",
  "Drill Down to the Detail",
  "Supporting Local Businesses"
];

const AirlineComponent = () => {
  return (
    <div>
      <div className="bg-[url(/airline-hero.png)] bg-cover bg-no-repeat w-full h-[650px] sm:h-[708px] mt-10 sm:mt-20">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[100px] px-4">
          <h1 className="font-bold text-[28px] leading-[40px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            For Global Journeys, Choose Treepz’s Airport Shuttle Service
          </h1>
          <p className="text-base sm:text-xl text-center">
            Welcome aboard our airport shuttle service – we are here and ready
            to transfer you to your airport (please familiarize yourself with
            our safety instructions in the seat pocket in front of you). If you
            are arranging overseas travel for business or going on a
            well-deserved vacation, Treepz will take care of the wheels on the
            ground with a whole host of choices.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[330px] mx-auto mt-8 sm:mt-14 flex items-center gap-2 mb-11 sm:mb-0"
            //onClick={() => {}}
          >
            Learn more about Treepz’s Airline Services
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <h1 className="text-[32px] font-bold leading-[40px] text-[#212529] my-8 w-full text-center">
          Why Choose Treepz for Your Airline Transportation?
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
        <h1 className="w-full sm:w-[641px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6 text-center sm:text-left">
          Great Fliers Don’t Flap – They Treepz
        </h1>
        <p className="text-xl text-[#4D5154] text-center">
          Our airport shuttle services are tailored to suit your needs – you
          might be traveling solo, with a group, or with a mountain of luggage
          (we know how it is). Either way, your journey to catch your flight
          will be clean and comfortable and have ample storage space so you can
          relax and look forward to your trip. We offer flexible scheduling
          24/7, so you can always choose a departure time that aligns perfectly
          with your travel plans.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {AirlineUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <GetAQuote />
      <UserRoutesComponent title="Start Every Trip with a Treepz Airport Shuttle" desc="Our team is here to talk to you 24/7 about your next vacation or
              business trip. We’ll build your quote whether you’re flying once
              or one hundred times this year – and if it’s the latter, we’ll
              raise our hat to you as well." />
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg  bg-white sticky top-16 sm:top-24">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <Link
              href={`#info_${index + 1}`}
              className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0" id="info_1">
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Recurring Airport Shuttle Journeys
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg">
            <p>
              Whether you&lsquo;re a frequent flier, a pilot, a flight
              attendant, or an airport worker, the value of hassle-free journeys
              to the airport cannot be overstated.
            </p>

            <p>
              Treepz&lsquo;s shuttle services are operated by courteous drivers
              who possess an intricate knowledge of the city. This assurance not
              only gives you peace of mind but also lets you concentrate on
              getting to your terminal, whatever your reason.
            </p>

            <p>
              Take your travel experience to new heights with Treepz&lsquo;s
              reliable and efficient recurring airport shuttle services.
            </p>
          </div>
          {/*           <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
            //onClick={() => {}}
          >
            Get a quote
          </Button> */}
          {/*           <div className="w-full sm:h-[328px] relative">
            <Image
              src="/detail-img.png"
              alt="detail"
              fill
              priority
              className="object-contain absolute"
            />
          </div> */}

          <div className="flex flex-col space-y-6 mt-12" id="info_2">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Hotels with Airport Shuttle: Take Convenience to New Heights
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                When it comes to hassle-free travel, for most consumers nothing
                beats staying at hotels that offer airport shuttle services.
              </p>
              <p>
                if you are a hotel business owner who is looking to link up with
                a ground travel partner, use Treepz&lsquo;s service – it allows
                your guests to step off the plane, collect their bags, and then
                effortlessly hop onto a waiting shuttle that whisks them away to
                your cozy hotel. It&lsquo;s the perfect blend of comfort and
                convenience, ensuring a smooth transition from the airport to
                accommodation, and vice versa
              </p>
              <p>
                Not only do hotels with airport shuttles save people the
                headache of arranging transportation independently, but they
                also provide a sense of security. After a long journey, the last
                thing your guests want is to navigate unfamiliar territory – so
                why not hand it over to the experts?
              </p>
              <p>
                Treepz&lsquo;s shuttles are staffed with friendly drivers who
                know the ins and outs of the city, giving your guests peace of
                mind and allowing you to focus on providing them with a great
                stay
              </p>
              <Button
                variant={"default"}
                className="cursor-pointer rounded-full font-medium text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
                //onClick={() => {}}
              >
                Become a Treepz partner
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div
            className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6"
            id="info_3"
          >
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Our Airport Services in More Detail
            </h1>
            <ul className="list-disc list-inside sm:list-outside">
              <li>
                Door-to-gate – the number one important element of flying, in
                our humble opinion: getting to the airport in the first place.
                Say bon voyage to late taxis or expensive parking, and enjoy
                vehicles that are built to drop off you and your luggage with
                time to spare
              </li>
              <li>
                Intra-airport – fancy word, simple concept: we take you places
                within the airport once you’re there. Avoid long walks,
                confusing directions, and running though airports like the end
                scene of a romantic movie
              </li>
              <li>
                Hotel-to-airport (and back again) – so you’re staying at a hotel
                nearby the airport, and you want to get to your flight in the
                middle of the night with a reputable and safe company… it’s all
                very stressful. Don’t worry – Treepz will get you there
              </li>
              <li>
                Trackable journeys – all journeys can be tracked and all
                schedules can be analyzed. This means two important things: one,
                you have complete visibility over your travel, and two, you can
                amend and streamline your future plans to save time and money.
                Neat, huh?
              </li>
              <li>
                ‍24/7 service – we’re always here for you. It really is that
                simple
              </li>
            </ul>
          </div>
          <div
            className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6"
            id="info_4"
          >
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Drill Down to the Detail
            </h1>
            <p>
              No matter how long your journey, how big the vehicle is, or what
              special needs we need to cater to, here is what Treepz will always
              provide you with – and you don’t even need to give us an apple!
            </p>
            <ul className="list-disc list-inside sm:list-outside">
              <li>
                Our services will be flexible and tailored uniquely to your
                needs
              </li>
              <li>
                Background-checked drivers, insured journeys, and an experienced
                team
              </li>
              <li>
                Save precious time and money with the perfect vehicles for you
              </li>
              <li>Safety concerns will be taken care of, every time</li>
              <li>Receive your own dedicated account manager</li>
              <li>Real-time GPS tracking and monitoring for all vehicles</li>
              <li>
                Real-time communication channel for parents, schools, and
                drivers
              </li>
              <li>
                Historical reports of journeys plus vehicle, driver, billing,
                and attendance reports
              </li>
              <li>Rest assured that every journey is carbon neutral</li>
            </ul>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
              //onClick={() => {}}
            >
              Speak to the Treepz Team
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/executive-bg.png"
              alt="detail"
              fill
              priority
              className="object-cover absolute"
            />
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
    </div>
  );
};

export default AirlineComponent;

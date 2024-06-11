/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import Postal from '../common/card';
import { ExecutiveUniqueData, AccordionData, ExecutivePartnerData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import { OurPartnersData } from "@/components/Hero/data";
import OurPartners from "@/components/Hero/partners";
import PopularCitiesCarousel from "@/components/common/PopularCitiesCarousel";
import MiniStickyBarMenu from '../common/MiniStickyBarMenu';
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';
const ExecutiveInfo =["Put Your Workplace Travels  in Treepz’s Hands", "Why Choose Treepz for Your Executive Transport?", "Our Tailored Event Transportation Services","Convenient Luxury Tailored to Your Business", "How much does it cost?", "Got questions? Go Ahead!","Get Started Right Away"]

const ExecutiveComponent = () => {
    const { showModal } = useModal();
    return (
      <div>
        <div className="bg-[url(/exec-trans.png)] bg-cover bg-no-repeat w-full h-[479px] sm:h-[708px] justify-center items-center sm:mt-20">
          <div className="w-full sm:w-[920px] mx-auto text-white pt-[60px] sm:pt-[180px] px-4">
            <h1 className="font-bold text-[32px] leading-[40px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
              Treepz’s Polished Executive Transportation
            </h1>
            <p className="text-base sm:text-xl text-center w-full sm:w-[614px] mx-auto">
              Your workplace teams and contacts deserve a journey that will
              instill a feeling of calm confidence in your business.
            </p>
            <div className="flex justify-center">
            <Button
              variant={"default"}
              className="w-full sm:w-[194px] mx-auto mt-8 sm:mt-[52px] sm:h-[64px]"
                            onClick={showModal}
              //onClick={() => {}}
            >
              Tell me more
            </Button>
            </div>
          </div>
        </div>
        <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
          <h1 className="text-[32px] font-bold leading-[40px] w-full text-center mb-[42px]">
            Why Choose Treepz for Executive Transportation?
          </h1>
          <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
            Companies who use Treepz
          </p>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
            {ExecutivePartnerData.map(({ src }: any) => (
              <OurPartners src={src} key={src} />
            ))}
          </div>
        </div>
        <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
          <h1 className="w-full font-bold text-2xl sm:text-[32px] sm:leading-[40px] uppercase text-[#212529] mb-6 text-center">
            Convenient Luxury that Doesn’t Break the Bank
          </h1>
          <p className="text-lg text-[#4D5154] text-center">
    From airport pickups to critical meetings, executive transportation shouldn't add to your busy schedule. Eliminate the stress of arranging rides and focus on what matters with our seamless solutions.
          </p>
        </div>
        {/* unique */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
          {ExecutiveUniqueData.map(({ icon, title, description }) => (
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
            priority
            sizes="100vw, 100vh"
            className="absolute object-fill"
            alt="rect"
          />
        </div>
        <GetAQuote />
        <UserRoutesComponent 
          title="TREEPZ for Business"
          desc="So, now it’s time to take advantage of Treepz’s luxury executive
                ground transportation for a stylish and professional transfer."
        />
        <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
                  <MiniStickyBarMenu data={ExecutiveInfo} />

          {/* <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg">
            <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
              FILL ALL THE INFORMATION YOU NEED
            </h1>
            {ExecutiveInfo.map((info, index) => (
              <div
                className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
                key={index}
              >
                <span className="w-full sm:w-[290px] font-semibold">
                  {info}
                </span>
                <ChevronRightIcon />
              </div>
            ))}
          </div> */}
          <div className="w-full sm:w-[853px] mt-10 sm:mt-0" id='info-1'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              Put Your Workplace Woes in Treepz’s Hands
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg">
              <p>
                You and your travelers rely on transportation that meets all
                your expectations with
              </p>
              <li>A well-organized and safe ride</li>
              <li>A great reputation</li>
              <li>Vehicles that reflect your business well</li>
              <li>Prices to fit your budget</li>‍
              <p>
                Treepz them to their next location with efficient and stylish
                executive transportation.
              </p>
            </div>
            <Button
              variant={"default"}
              className="mt-6 w-full sm:w-[200px] sm:h-[64px] sm:mt-10 sm:mb-[48px]"

                            onClick={showModal}
              //onClick={() => {}}
            >
              Contact our team
            </Button>
            {/*  <div className="w-full sm:h-[328px] relative">
              <Image
                src="/detail-img.png"
                alt="detail"
                fill
                priority
                className="object-contain absolute"
              />
            </div> */}

            <div className="flex flex-col space-y-6 mt-12" id='info-2'>
              <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
                Why Choose Treepz for Your Executive Transport?
              </h1>
              <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
                <p>
                  Because no other executive transportation group can provide
                  you with a whole fleet of vehicles to whisk your employees and
                  colleagues from one crucial event to another with the supreme
                  comfort and reliability you need – every single time. We
                  always provide
                </p>
                ‍
                <li>
                  Reliability – we arrange everything and find the most
                  efficient route. Hey, you’re a busy person.
                </li>
                <li>
                  Local drivers who go the extra mile – fully licensed,
                  background checked, experienced, courteous drivers who respect
                  your time and have local knowledge.
                </li>
                <li>
                  Global coverage – anywhere in the world you need transport,
                  Treepz will provide it
                </li>
                <li>
                  Technology – track your driver and seamlessly book for
                  yourself or on behalf of a colleague
                </li>
                <li>
                  Comfort and luxury – our fleet has all the soft edges you need
                  for a smooth journey, with robust safety at the core of
                  everything we do.
                </li>
                <li>
                  Privacy – your work is your business, so we exercise
                  discretion at all times.
                </li>
                <li>
                  ‍Productivity – efficient, calm, quiet journeys with all the
                  technology you need (and did you know that travel can increase
                  productivity?).
                </li>
              </div>
            </div>
            <div className="mt-11 border-b pb-11" id='info-3'>
              {/* <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
                Options
              </h1> */}
              <div className="flex flex-col space-y-6 my-6">
                <h1 className="font-semibold text-xl sm:text-2xl">
                  Our Tailored Event Transportation Services
                </h1>
                <p className="text-lg text-[#6F7174]">
                  We have the means to cater to a whole range of executive
                  transport, sometimes all at once. Things like
                  <li>Airport transfers</li>
                  <li>Airport meet and greet </li>
                  <li>Corporate events</li>
                  <li>Business meetings</li>
                  <li>Roadshows and conferences</li>
                  <li>Private tours and sightseeing</li>
                  <li>Employee commutes</li>
                  <li>
                    Lunches and dinners – and, if you’re starting early,
                    breakfast
                  </li>
                </p>
              </div>
              <div className="flex flex-col space-y-6 my-6" id='info-4'>
                <h1 className="font-semibold text-xl sm:text-2xl">
                  Convenient Luxury Tailored to Your Business
                </h1>
                <p className="text-lg text-[#6F7174]">
                  Our executive transportation service includes
                  <li>
                    High-end vehicles, such as luxury sedans, SUVs, and
                    limousines
                  </li>
                  <li>Professionally trained and licensed chauffeurs</li>
                  <li>
                    Personalized services tailored to your needs and preferences
                  </li>
                  <li>
                    Punctual and reliable transportation for a stress-free ride
                  </li>
                  <li>Executive VIP transportation</li>
                  <li>Regular employee relocation</li>
                </p>
              </div>
              <div className="flex flex-col space-y-6 my-6 border-b pb-10">
                <h1 className="font-semibold text-xl sm:text-2xl">
                  Treepz’s Top Tips for Choosing the Right Executive
                  Transportation
                </h1>
                <p className="text-lg text-[#6F7174]">
                  <li className="list-none">✅ Book in advance</li>
                  <li className="list-none">✅ Check company credentials</li>
                  <li className="list-none">✅ Ask about amenities</li>
                  <li className="list-none">✅ Communicate your needs</li>
                </p>
              </div>
              <Button
                variant={"default"}
                className="cursor-pointer rounded-full w-fit sm:w-[260px] font-semibold mt-8 sm:mt-6 text-black flex gap-2"

                            onClick={showModal}
                //onClick={() => {}}
              >
                Get them there with Treepz
                <ChevronRightIcon />
              </Button>
            </div>
            <div className="w-full h-[400px] sm:h-[328px] relative overflow-hidden my-10">
              <Image
                src="/executive-bg.png"
                alt="detail"
                fill
                priority
                className="object-fill absolute"
              />
            </div>
            <div className="flex flex-col space-y-6 border-t mt-6 pt-6" id='info-5'>
              <h1 className="font-semibold text-xl sm:text-2xl">
                How much does it cost?
              </h1>
              <p className="text-lg text-[#6F7174]">
                Contact our friendly and super-organized team to compare our
                executive transportation pricing and packages, from one-off
                trips to long-term arrangements. We’ll match your budget and we
                have enough vehicles to supply you with everything you need,
                whenever you need it.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-t mt-6 py-6 border-b">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Looking for Executive Transportation Companies?
              </h1>
              <p className="text-lg text-[#6F7174]">
                You’ve found us. Contact us for a friendly chat today and see
                how we can help you (because we promise we can).
              </p>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full w-fit font-semibold mt-8 sm:mt-6 text-black flex gap-2"

              //onClick={() => {}}
                            onClick={showModal}
            >
              Get them there with Treepz
              <ChevronRightIcon />
            </Button>
                       <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
              <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6" id='info-6'>
                Got questions? Go Ahead!
              </h1>
              <h1 className="font-semibold text-xl sm:text-[22px] sm:leading-[28px]">
                How do I book an executive transportation service?
              </h1>
              <p className="text-lg text-[#6F7174]">
                You can contact us online or, for immediate access to our
                tailored booking options, call our team to talk with them about
                what you need.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
              <h1 className="font-semibold text-xl sm:text-[22px] sm:leading-[28px]">
                What should I expect from an executive chauffeur?
              </h1>
              <p className="text-lg text-[#6F7174]">
                Treepz’s professional chauffeurs are punctual, well-groomed, and
                courteous – providing exceptional customer service throughout
                your journey. You deserve the best for your business.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
              <h1 className="font-semibold text-xl sm:text-[22px] sm:leading-[28px]">
                Is your service suitable for group travel?
              </h1>
              <p className="text-lg text-[#6F7174]">
                Yes, as many of our customers need to move whole teams or
                companies from one place to the next, our executive
                transportation service offers larger luxury vehicles, such as
                vans or mini coaches, to accommodate group travel.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
              <h1 className="font-semibold text-xl sm:text-[22px] sm:leading-[28px]">
                Are there any additional fees or charges I should be aware of?
              </h1>
              <p className="text-lg text-[#6F7174]">
                This depends on what you need, but we will never include any
                hidden costs in our executive transportation services. Make sure
                you talk to us about your needs, group sizes, requirements, and
                the nature of the event so that we can include any
                considerations such as tolls, parking, or extra waiting time,
                for example.
              </p>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full w-fit font-semibold mt-8 sm:mt-6 text-black flex gap-2"

                            onClick={showModal}
              //onClick={() => {}}
            >
              Get a quota
              <ChevronRightIcon />
            </Button>
 <div className="flex flex-col space-y-6 border-t mt-6 pt-6" id='info-7'>
              <h1 className="font-semibold text-xl sm:text-2xl">
                Get Started Right Away
              </h1>
              <p className="text-lg text-[#6F7174]">
                If this sounds like you right now
                <li>
                  You are tired of a complicated booking process for each event
                  or journey
                </li>
                <li>
                  You’re fed up with drivers showing up late or getting stuck in
                  traffic
                </li>
                <li>
                  You need to know exactly where your clients or employees are
                  while they travel
                </li>
                <li>
                  Or you simply want to help your colleagues get to work on time
                  every day
                </li>
                <p className="my-6">
                  We guarantee we have all the vehicles and organizational
                  skills you need so you can get on with your day job (right?).
                </p>
              </p>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full w-fit font-semibold mt-8 sm:mt-6 text-black flex gap-2"

                            onClick={showModal}
              //onClick={() => {}}
            >
              Get a quota
              <ChevronRightIcon />
            </Button>
            <div className="w-full h-[400px] sm:h-[328px] relative overflow-hidden my-10">
              <Image
                src="/exe-2.png"
                alt="detail"
                fill
                priority
                className="object-fill absolute"
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
      </div>
    );
}

export default ExecutiveComponent

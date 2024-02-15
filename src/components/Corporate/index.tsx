'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from '../Hero/partners';
import Postal from '../common/card';
import { CorporateUniqueData, AccordionData, MiniPartnerData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';

const NeededInformations = ["Corporate Shuttle Service", "Which Swoop corporate shuttle service should I choose?", "How much does a corporate shuttle program cost?", "Is Treepz carbon neutral?", "What type of amenities do Swoop vehicles offer?", "How many vehicles can I reserve for the corporate shuttle service?", "Is there a Swoop corporate shuttle service near me?"];

const CorporateComponent = () => {
  return (
    <div>
      <div className="bg-[url(/corporate-hero.png)] bg-cover bg-no-repeat w-full h-[622px] sm:h-[707px]">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[144px] px-4">
          <h1 className="font-bold text-[38px] sm:text-[54px] sm:leading-[56px] mb-[28px] uppercase text-center">
            Corporate Shuttle Services: The Drive Behind Your Business
          </h1>
          <p className="text-base sm:text-lg text-center">
            Much more than A to B – workplace journeys should provide comfort
            and professional calm for your team as they move from one place to
            another. Treepz has dozens of options to make travel a beneficial
            part of your working day. 
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-fit mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"
            //onClick={() => {}}
          >
            Book your corporate transportation
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Setting the Standard in Corporate Shuttle Services
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {MiniPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[735px] mx-auto font-bold text-[20px] sm:text-[28px] leading-[32px] uppercase text-[#212529] mb-6 text-center sm:text-left">
          Skilled Services, Providing Everything You Need
        </h1>
        <p className="text-xl text-[#4D5154] text-center w-full sm:w-[725px] mx-auto">
          We’re different from your average transportation provider, and working
          with us is more than just a quick transaction. Our dedicated team is
          ready to tailor our services exactly to your transportation needs.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {CorporateUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="bg-black">
        <div className="container px-4 sm:px-20 py-[50px] text-white flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[28px] sm:text-[40px] font-medium leading-[48px] text-white">
            Get a Free Quote Right Away
          </h1>
          <div className="flex w-full sm:w-[355px] justify-between items-center mt-4">
            <div className="flex gap-8 w-full">
              <div>
                <TimerIcon />
              </div>
              <div className="flex flex-col w-full sm:w-[111px] text-sm">
                It takes less than
                <span className="font-medium text-base">3 minutes</span>
              </div>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2"
              //onClick={() => {}}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FDF2D0] w-full">
        <div className="container px-4 sm:px-20 flex justify-between flex-col sm:flex-row">
          <div className="py-4 sm:py-[120px] flex flex-col">
            <h1 className="text-2xl font-bold mb-2 sm:mb-6">About Swoop</h1>
            <p className="text-lg sm:text-xl">
              Choose from hundreds of vehicles, dozens of styles, and seemingly
              endless choices when it comes to amenities. Travel around in
              top-of-the-line style!
            </p>

            <div className="w-[280px] h-[56px] mt-[20px] sm:mt-[89px] relative">
              <Image
                src="/google-rating.png"
                alt="google rating"
                fill
                priority
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="w-full h-[670px] relative">
            <Image
              src="/bus-route.png"
              alt="Bus routing"
              fill
              priority
              className="absolute object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <div
              className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </div>
          ))}
        </div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0">
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Corporate Shuttle Service
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg">
            <p>
              So, you love your team of employees and want them to be happy
              (same here) – but are you struggling to think of a new way to give
              them new work perks, or perhaps some colleagues are wrestling with
              a super-tricky commute?
            </p>

            <p>
              Well, now you can streamline the way your team gets to work,
              whether they are full-time or hybrid employees, by offering them
              comfortable, reliable, and 100% carbon-neutral transport that is
              super-easy to book and track.
            </p>

            <p>
              With our corporate shuttle, you can retain awesome talent and save
              everyone time and money getting to work – that way, the whole
              workforce is happy and every working day starts and ends
              stress-free.
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
            //onClick={() => {}}
          >
            Talk to our friendly team
            <ChevronRightIcon />
          </Button>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/corporate-1.png"
              alt="detail"
              fill
              priority
              className="object-contain absolute"
            />
          </div>

          <div className="flex flex-col space-y-6 mt-12">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Which Swoop corporate shuttle service should I choose?
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <li>
                <span className="font-bold">Home to Work:</span> Simple is as
                simple does – choose this service to pick up riders near their
                home or on their doorstep to take them to work and back.
              </li>
              <li>
                <span className="font-bold">Last Mile:</span> Connect your
                office to a nearby transit hub to seamlessly transfer your
                employees from their method of public transport.
              </li>
              <li>
                <span className="font-bold">Intra-Campus:</span> Connect several
                buildings and parking lots on your campus with regular shuttles
                – they’re quick and comfortable, and this way the riders can
                arrive at their next meeting cool as a cucumber.
              </li>
              ‍
              <li>
                <span className="font-bold">Park & Ride:</span> Arrange pick-up
                for riders at predefined parking locations and shuttle them to
                work, the most flexible option for your employees.
              </li>
              <Button
                variant={"default"}
                className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
                //onClick={() => {}}
              >
                Get your team there
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              How much does a corporate shuttle program cost?
            </h1>
            <p className="text-lg text-[#6F7174]">
              The cost of your corporate shuttle program depends on certain
              variables, such as where your passengers are traveling, how long
              you need the shuttle to run for, and how many vehicles you need.
              Contact book@swoopapp.com to request a FREE, customized quote.
            </p>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Is Treepz carbon neutral?
            </h1>
            <p className="text-lg text-[#6F7174]">
              Certainly, and you can read more about that here: Swoop Rides are
              now 100% Carbon Neutral
            </p>
            <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
              <Image
                src="/airport-1.png"
                alt="detail"
                fill
                priority
                className="object-contain absolute"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              What type of amenities do Swoop vehicles offer?
            </h1>
            <p className="text-lg text-[#6F7174]">
              Your employees will have a much more productive journey thanks to secure WiFi and USB charging ports as standard.
            </p>
            <p className="text-lg text-[#6F7174]">
              Other amenities include reclining seats, air conditioning, and PA systems, all available upon request.
            </p>
            <p className="text-lg text-[#6F7174]">
              You will receive a dedicated account manager and 24/7 support – because we know you have your own job to do.
            </p>
          </div>

          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              How many vehicles can I reserve for the corporate shuttle service?
            </h1>
            <p className="text-lg text-[#6F7174]">
              Ask us for whatever you need. We offer a wide range of vehicles from executive SUVs, minivans, sprinter vans, mini-coaches, and motor coaches.
            </p>
            <p className="text-lg text-[#6F7174]">
              Whether it’s a small group or thousands of employees we can tailor the logistics and vehicles based on your needs.
            </p>
          </div>

          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              How many vehicles can I reserve for the corporate shuttle service?
            </h1>
            <p className="text-lg text-[#6F7174]">
              Ask us for whatever you need. We offer a wide range of vehicles from executive SUVs, minivans, sprinter vans, mini-coaches, and motor coaches.
            </p>
            <p className="text-lg text-[#6F7174]">
              Whether it’s a small group or thousands of employees we can tailor the logistics and vehicles based on your needs.
            </p>
          </div>

          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Is there a Swoop corporate shuttle service near me?
            </h1>
            <p className="text-lg text-[#6F7174]">
              We currently service large metropolitan cities throughout the U.S. from New York to LA, Austin to San Francisco, and from Miami to Seattle, as well as globally.
            </p>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Great, how do I get started?
            </h1>
            <p className="text-lg text-[#6F7174]">
              Contact us right away FREE, customized quote – our team will listen to your needs and challenges to build a flexible and dependable service to ensure your employees feel less stress, have more security and enjoy a productive working day.
            </p>
            <Button
                variant={"default"}
                className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
                //onClick={() => {}}
              >
                Get a customized quote
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
    </div>
  );
};

export default CorporateComponent
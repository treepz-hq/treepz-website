'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import OurPartners from '../Hero/partners';
import { OurPartnersData } from '../Hero/data';
import Postal from '../common/card';
import { ConventionUniqueData, AccordionData } from '@/lib/dummyData';
import TimerIcon from '@/assets/svgs/timer.svg'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';

const NeededInformations = ["How Treepz Will Take Your Worries Away", "Treepz has the know-how", "Our conference shuttle services", "Tailor-made solutions", "Time and cost savings","Safety", "Choose your own vehicle","Carbon neutral","Options for convention shuttles","How much does it cost for convention transportation near me?", "Book EASY Convention Transporation"];

const ConventionComponent = () => {
  return (
    <div>
      <div className="bg-[url(/Hero-convention.png)] bg-cover bg-no-repeat w-full h-[519px] sm:h-[708px]">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[100px] px-4">
          <h1 className="font-bold text-[38px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            CONVENTION Transportation
          </h1>
          <p className="text-base sm:text-xl text-center">
            If you’re here because you have been handed the task of organizing
            your next convention shuttle service, we have dozens of options and
            amenities for you to choose from.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[297px] mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"
            //onClick={() => {}}
          >
            Find out more
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Trusted by Your Favorite Businesses
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {OurPartnersData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[551px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6 text-center sm:text-left">
          First of all, it&lsquo;s going to be OK…
        </h1>
        <p className="text-xl text-[#4D5154] text-center">
          And second of all, if it&lsquo;s a convention shuttle service you
          need, you are in the right place. Your event is more than just a quick
          transaction to us - we make it our business to keep your business
          running smoothly.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {ConventionUniqueData.map(({ icon, title, description }) => (
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
            <h1 className="text-2xl font-bold mb-2 sm:mb-6">
              Dive Deeper into Treepz&lsquo;s Event Transportation Services
            </h1>
            <p className="text-lg sm:text-xl">
              Our services are trusted by many. Experience the unique Treepz
              touch that elevates us in the industry.
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
            How Treepz Will Take Your Worries Away
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg">
            <p>
              Treepz specializes in large events that are notoriously complex.
              We understand that you are looking for a reputable company that
              can take the strain away from you and take your delegates, guests,
              and teammates to a conference or convention.
            </p>

            <p>
              Unlike other conference shuttle providers who can come out more
              expensive because of a distinct lack of transport options, Treepz
              has a whole fleet of vehicles – clean, green, safe, and ready to
              go.
            </p>

            <p>
              Booking with us will save you money, reduce congestion and parking
              concerns, as well as getting a five-star streamlined service!
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"
            //onClick={() => {}}
          >
            Get a quote
          </Button>
          <div className="w-full sm:h-[328px] relative">
            <Image
              src="/detail-img.png"
              alt="detail"
              fill
              priority
              className="object-contain absolute"
            />
          </div>

          <div className="flex flex-col space-y-6 mt-12">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Treepz has the know-how
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                Once we know the details of your event, we will select a team of
                professional drivers who are familiar with the location where
                the event is taking place – a bunch of amazing drivers who can
                handle multi-day logistics and all different trip types.
              </p>
              ‍
              <p>
                Not only that, but we also deploy onsite coordinators on the
                ground who will be an extension of your team. Our experienced
                team will help yours to make the perfect vehicle selection for
                your convention.
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
            <div className="flex flex-col space-y-6 my-6">
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
            <div className="flex flex-col space-y-6">
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
            className="cursor-pointer rounded-full w-full sm:w-[260px] font-semibold mt-8 sm:mt-6 text-black flex gap-2"
            //onClick={() => {}}
          >
            Get the there with Treepz
            <ChevronRightIcon />
          </Button>
          <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Treepz x Lagos Business School
            </h1>
            <p className="text-lg text-[#6F7174]">
              Treepz specializes in large events that are notoriously complex. We understand that you are looking for a reputable company that can take the strain away from you and take your delegates, guests, and teammates to a conference or convention.
            </p>
          </div>
          <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Book an ‘A’ in Transportation!
            </h1>
            <p className="text-lg text-[#6F7174]">
              Check out Treepz! You are in the right place, if you are looking for reliable private transportation services for school near me—you can simply contact us now for your FREE bespoke quote.
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-full sm:w-[216px] font-semibold mt-8 sm:mt-6 text-black flex gap-2"
            //onClick={() => {}}
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
            <p>Working with you is more than just a quick transaction to us. Our dedicated and experienced team always makes sure that we tailor exactly to your specific needs.</p>
          </div>
        <div className="mt-20">
          <PopularCitiesCarousel />
        </div>
      <TechCommLogos />
      <BetterTogetherComponent />
    </div>
  );
};

export default ConventionComponent
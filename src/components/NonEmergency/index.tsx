/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import OurPartners from '../Hero/partners';
import Postal from '../common/card';
import { NonEmeTranspUniqueData, AccordionData, MiniPartnerData } from '@/lib/dummyData';
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TechCommLogos from '@/components/common/techs'
import BetterTogetherComponent from '@/components/Trips';
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';

const NeededInformations = ["Non-Emergency Medical Transportation", "Caring Transportation When You Need it Most", "Get There Safely with Treepz", "Drill Down to the Detail", "So, What Are the Options?","It’s a Win-Win for Your Business"];

const NonEmergencyTranspComponent = () => {
    const {showModal} = useModal()
  return (
    <div>
      <div className="bg-[url(/non-eme-hero.png)] bg-cover bg-no-repeat w-full h-fit sm:h-[707px] mt-10 sm:mt-20">
        <div className="w-full sm:w-[920px] mx-auto text-white py-[80px] sm:pt-[199px] px-4">
          <h1 className="font-bold text-[28px] sm:text-[54px] leading-[32px] sm:leading-[56px] mb-[28px] uppercase text-center">
            Non-Emergency Medical Transportation
          </h1>
          <p className="text-base sm:text-lg text-center w-full sm:w-[671px] mx-auto">
           Convenient transportation for your medical needs.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold w-full sm:w-fit sm:mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"
                        onClick={showModal}
            //onClick={() => {}}
          >
            Book your non-medical emergency transportation
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <h1 className="text-2xl text-[32px] sm:leading-[40px] font-bold uppercase text-center mb-8">
          Why Choose Treepz for Non-Emergency Medical Transportation?
        </h1>
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
We work with the best companies  in business
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {MiniPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[735px] mx-auto font-bold text-[20px] sm:text-[28px] leading-[32px] uppercase text-[#212529] mb-6 text-center">
treepz, your companion for good health
        </h1>
        <p className="text-xl text-[#4D5154] text-center w-full sm:w-[1022px] mx-auto">
It's not just a ride, it's a tailored solution. Our dedicated team works with you to create a transportation plan that fits your unique needs.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {NonEmeTranspUniqueData.map(({ icon, title, description }) => (
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
        title="Non-Emergency Medical Transportation with Treepz" 
        desc="Choose from hundreds of vehicles, dozens of styles, and seemingly
              endless choices when it comes to amenities." 
      />
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg bg-white sticky top-16 sm:top-24">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <Link
              href={`#info-${index+1}`}
              className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0" id='info-1'>
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Non-Emergency Medical Transportation
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg border-b pb-11">
            <p>
              If there is one vital kind of transportation service that requires
              the utmost reliability, safety, comfort, and care it is medical
              transportation.
            </p>

            <p>
              Not only does it ensure that those in pain or discomfort feel safe
              and secure, our non-emergency shuttle service helps to reduce the
              need for emergency services within the medical system.
            </p>

            <p>
              Treepz is here to take away any concerns you may have and provide
              you with a comfortable medical or hospital shuttle service,
              transferring you from one safe place to the next. Our
              compassionate, trained team will make sure you or your loved ones
              have a smooth transition to medical appointments – and back again
              – without any upheaval or emotional distress.
            </p>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"

                        onClick={showModal}
              //onClick={() => {}}
            >
              Get a quote
              <ChevronRightIcon />
            </Button>
          </div>

          <div className="flex flex-col space-y-6 mt-12" id='info-2'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Caring Transportation When You Need it Most
            </h1>
            <p className="text-[#6F7174] text-lg">
              No matter how near or far you need to travel, our compassionate
              and trained team will provide professional and safe non-emergency
              transportation services for those with medical needs and
              disabilities.
            </p>
            <p className="my-6 text-[#6F7174] text-lg">
              ‍Our services include a wide variety of options
            </p>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <li>Medicaid transportation</li>
              <li>Hospital transportation</li>
              <li>Patient transfer service</li>
              <li>Disability transportation</li>
              <li>Wheelchair transportation</li>
              <li>Elderly transportation services</li>
              <li>Medical shuttles</li>
              <p className="my-6 text-[#6F7174] text-lg">
                If you have been struggling to find a hospital transporter, look
                no further – you have found us, your centralized transportation
                service for anyone in need of extra attention and protection.
              </p>

              <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
                <Image
                  src="/non-1.png"
                  alt="detail"
                  fill
                  priority
                  className="object-contain absolute"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11" id='info-3'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Get There Safely with Treepz
            </h1>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Tailor-made solutions
            </h1>
            <p className="text-lg text-[#6F7174]">
              Everyone’s individual needs are different, so we will tailor your
              transport to the hospital, a medical center, a doctor’s surgery,
              or other healthcare professionals.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Time and cost savings
            </h1>
            <p className="text-lg text-[#6F7174]">
              Unsuitable transportation to hospital can be unreliable and slow,
              costing you precious time when you just need to get to your
              appointment – and the cost can come as a surprise after you have
              used the service. Wrap it all up in a call with our team, then
              rest easy that we will get you there in a tailored vehicle with a
              team who is ready to take care of your needs.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Dedicated account manager
            </h1>
            <p className="text-lg text-[#6F7174]">
              Our friendly, trained, highly organized team will take all your
              details, including specific needs and requirements, then arrange
              the appropriate vehicle for you to arrive exactly when you need
              it. They are on hand 24/7 to answer your questions.
            </p>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Carbon neutral
            </h1>
            <p className="text-lg text-[#6F7174]">
              We take care of the environment as we take care of you. It’s just
              how we like to do things.
            </p>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11" id='info-4'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Frequently Asked Questions
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl">
              How much does medical and hospital transport cost?
            </h2>
            <p className="text-lg text-[#6F7174]">
              There are a few things we will need to consider when we build your
              quote, such as the length of your journey, how many CPR-qualified
              team members we will need to deploy, and what specific care needs
              you have. But don’t worry, it will all be laid out for you in
              writing with no surprises.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              How many people can you provide non-emergency medical
              transportation for?
            </h2>
            <p className="text-lg text-[#6F7174]">
              So that we can provide the most comfortable journey possible, we
              tend to allow a very small number of people onboard. So this means
              the person being transported, of course, plus an agreed friend or
              family member. Talk to us if anyone else special would like to
              come, such as a family pet, and we’ll see what we can do.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              How do we book our medical trip?
            </h2>
            <p className="text-lg text-[#6F7174]">
              Simply click the link at the bottom of our page to see our contact
              details. You will always talk to a real person so that your
              transport can be bespoke, accurate, and at the best price for you
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Do I need a coordinator for my non-emergency medical journey?
            </h2>
            <p className="text-lg text-[#6F7174]">
              One of our team will be your dedicated coordinator until your
              journey is complete, but we won’t bombard you with emails or calls
              – we’ll only contact you about your medical transportation.
            </p>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Is Treepz carbon neutral?
            </h2>
            <p className="text-lg text-[#6F7174]">
              Yes – all of our transport is carbon neutral, in fact. Find out
              more about that here.
            </p>

            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
                        onClick={showModal}
              //onClick={() => {}}
            >
              Contact our team
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="flex flex-col space-y-6 my-6 border-b pb-11" id='info-5'>
            <h1 className="font-semibold text-xl sm:text-2xl">
              What cities is Treepz in?
            </h1>
            <p className="text-lg text-[#6F7174]">
              We operate in many major US cities like New York, Austin, Miami,
              and Los Angeles. Contact us to talk about your hometown!
            </p>
          </div>
          <div className="flex flex-col space-y-6 my-6 pb-11" id='info-6'>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Book your Non-Emergency Medical Transportation
            </h1>
            <p className="text-lg text-[#6F7174]">
              You have found your all-inclusive service, dedicated and
              professional team, and the smoothest transfer options to get you
              from your home to a medical center and back again. As well as
              comfort, we also give you style, with WiFi, USB ports, and
              temperature control in each of our vehicles.
            </p>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
                        onClick={showModal}
              //onClick={() => {}}
            >
              Talk to us about your needs
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

export default NonEmergencyTranspComponent

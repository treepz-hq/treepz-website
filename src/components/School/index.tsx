'use client'
import React from 'react'
import { Button } from '../ui/button';
import OurPartners from '@/components/Hero/partners';
import Postal from "../common/card";
import { ShoolUniqueData, MiniPartnerData, SchoolPartnerData } from "@/lib/dummyData";
import Image from 'next/image';
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TimerIcon from '@/assets/svgs/timer.svg'
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import TechCommLogos from '@/components/common/techs';
import BetterTogetherComponent from '@/components/Trips';
import Link from 'next/link'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';

const NeededInformations = [
  "Treepz’s School Transport Services",
  "Treepz has the know-how",
  "Our conference shuttle services",
  "Tailor-made solutions",
];

const SchoolTransComponent = () => {
    const {showModal} = useModal()
  return (
    <>
      <div className="bg-[url(/school-hero.png)] bg-no-repeat bg-cover w-full text-white flex flex-col justify-center items-center py-[62px] sm:py-[176px] mt-5">
        <div className="mb-13 flex flex-col w-full sm:w-[783px] text-center">
          <h1 className="text-[36px] sm:text-[56px] font-bold leading-[40px] sm:leading-[64px] uppercase text-center w-full">
            TREEPZ’S School Transportation Services
          </h1>
          <p className="text-base text-center sm:text-xl mt-[20px] sm:mt-[28px]">
      From field trips to sporting events, Treepz gets your students there comfortably, efficiently, and happily.  Book your next school trip with confidence and let us handle the ride, so you can focus on what matters most - your students!
          </p>
        </div>
        <Button
          variant={"default"}
          className="cursor-pointer rounded-full text-gray-900 w-fit flex items-center font-semibold gap-2 mt-14"
          onClick={showModal}
        >
          Book your school transportation service
        </Button>
      </div>
      <h1 className="text-2xl sm:text-[32px] leading-[40px] font-bold mt-[56px] sm:mt-[96px] sm:mb-[42px] w-full text-center">
        Why Choose Treepz for Transportation Services for Schools?
      </h1>
      <div className="container px-4 sm:px-20 flex flex-col mt-[75px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          {}
          Trusted by Your Favorite Schools
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center ">
          {SchoolPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-6 justify-center items-center sm:max-w-[1022px] sm:mx-auto">
        <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] text-[#212529] uppercase font-bold text-center">
          capabilities for all your needs
        </h1>
        <p className="text-sm sm:text-xl text-[#4D5154] px-4 sm:px-0 text-center sm:text-left">
          We’re different from your average transportation provider, and working
          with us is more than just a quick transaction. Our dedicated team is
          ready to tailor our services exactly to your transportation needs.
        </p>
      </div>
      {/* School category */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {ShoolUniqueData.map(({ icon, title, description }) => (
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
        title="Dive Deeper into Treepz&lsquo;s Event Transportation Services"
        desc="So, now it’s time to take advantage of Treepz’s luxury executive
              ground transportation for a stylish and professional transfer."
      />
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="md:flex flex-col w-full sm:w-[352px] hidden h-fit shadow rounded-lg bg-white sticky top-16 sm:top-24">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <Link
              href={`#info-${index+1}`}
              className="flex border-b cursor-pointer text-gray-900 justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
        <div
          className="w-full sm:w-[853px] mt-10 sm:mt-0"
          id="info-1"
        >
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Treepz’s School Transport Services
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg">
            <p>
              Arranging school transportation comes with a lot of challenges –
              “I need the kids to get to school on time with minimum input, I
              want something that gets them directly from door to door, and I
              would like a safe and trustworthy school bus service to do it!”
              Sound familiar?
            </p>

            <p>
              Hey, it’s all going to be OK – and not just OK, but amazing! Now
              that you’ve found Treepz, you can grab a coffee and easily book
              the most tailored vehicle options for you and your little, or
              not-so-little ones to get to their classroom fresh and ready to
              learn!
            </p>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-medium flex items-center gap-2 mt-6 w-full sm:w-fit sm:mt-10 sm:mb-[48px]"

              onClick={showModal}
            //onClick={() => {}}
          >
            Get a quote
            <ChevronRightIcon />
          </Button>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/school-1.png"
              alt="school"
              fill
              sizes="100vw, 100vh"
              priority
              className="object-cover absolute"
            />
          </div>

          <div className="flex flex-col space-y-6 mt-12" id='info-2'>
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              School Transportation Services You Can Rely on
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              As you know, there is a lot to consider when it comes to arranging
              transportation services for schools – but we have everything
              covered
              <li>
                <span className="font-semibold">Safety</span> – robust and
                child-friendly vehicles, traceable journeys that both school
                staff and guardians can access anytime, and trained, screened
                drivers
              </li>
              <li>
                <span className="font-semibold">Regulations</span> – from
                wheelchair accessibility to regular third-party checks, to
                onboard safety features, nothing will be left to chance and will
                meet federal, state, and local regulations
              </li>
              <li>
                <span className="font-semibold">Sustainability</span>– one
                carbon-neutral vehicle can carry many students, reducing
                emissions and the amount of traffic on the roads
              </li>
            </div>
          </div>
          <div
            className="flex flex-col space-y-6 mt-12"
            id="info-3"
          >
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Our School Transportation Services are Top of the Class!
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              No matter how long your journey, how big the vehicle is, or what
              special needs we need to cater to, here is what Treepz will always
              provide you with – and you don’t even need to give us an apple!
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
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
              onClick={showModal}
            >
              Get the there with Treepz
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/school-2.png"
              alt="school"
              fill
              priority
              className="object-cover absolute my-10"
            />
          </div>
          <div className="mt-11 border-b pb-11" id='info-4'>
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
          <div className="flex flex-col space-y-6 border-t mt-6 pt-6">
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

export default SchoolTransComponent

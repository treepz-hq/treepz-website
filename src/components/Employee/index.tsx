'use client'
import React from 'react'
import { Button } from '../ui/button';
import OurPartners from '@/components/Hero/partners';
import Postal from "../common/card";
import { EmployeePartnerData, EmployeeUniqueData, MainPartnerData, MiniPartnerData } from "@/lib/dummyData";
import Image from 'next/image';
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import TimerIcon from '@/assets/svgs/timer.svg'
import PopularCitiesCarousel from '@/components/common/PopularCitiesCarousel';
import TechCommLogos from '@/components/common/techs';
import BetterTogetherComponent from '@/components/Trips';
import Link from 'next/link'
import MiniStickyBarMenu from '@/components/common/MiniStickyBarMenu'
import GetAQuote from '@/components/common/get-a-quote'
import UserRoutesComponent from '@/components/common/user-routes'
import { useModal } from '@/contexts/ModalContext';
const NeededInformations = [
  "What is the Impact of Using an Employee Shuttle Service?",
  "How much does it cost?",
  "An Employee Shuttle Service You Can Rely on",
  "Drill Down to the Detail",
  "So, What Are the Options?",
  "It’s a Win-Win for Your Business"
];

const EmployeeTransComponent = () => {
    const {showModal} = useModal()
  return (
    <>
      <div className="bg-[url(/employee-hero.png)] bg-no-repeat bg-cover w-full text-white flex flex-col justify-center items-center py-[62px] sm:py-[176px] mt-5 sm:mt-20">
        <div className="mb-13 flex flex-col w-full sm:w-[783px] text-center">
          <h1 className="text-[36px] sm:text-[56px] font-bold leading-[40px] sm:leading-[64px] uppercase text-center w-full">
Get your employees to move better
          </h1>
          <p className="text-base text-center sm:text-xl mt-[20px] sm:mt-[28px]">
            Less stress, more productivity. Get your colleagues and employees to
            work smoothly and safely.
          </p>
        </div>
        <Button
          variant={"default"}
          className="w-fit sm:w-[197px] mx-auto mt-5 sm:mt-[52px] sm:h-[64px] font-semibold text-base"
          onClick={showModal}
        >
          Speak with our team
        </Button>
      </div>
      <h1 className="text-2xl sm:text-[32px] leading-[40px] font-bold mt-[56px] sm:mt-[96px] sm:mb-[42px] w-full text-center">
        Why Choose Treepz for Employee Transportation?
      </h1>
      <div className="container px-4 sm:px-20 flex flex-col mt-[75px] mb-[113px]">
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          {}
          We are trusted by the best in the business
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center ">
          {EmployeePartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-6 justify-center items-center sm:max-w-[1022px] sm:mx-auto">
        <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] text-[#212529] uppercase font-bold text-center">
          Any Size, Any Time, Anywhere
        </h1>
        <p className="text-sm sm:text-xl text-[#4D5154] px-4 sm:px-0 text-center ">
      Our employee transportation scales to your needs, from small teams to large companies. Enjoy reliable rides, real-time tracking, and optional music at affordable prices. Get your team where they need to be, efficiently and cost-effectively.
        </p>
      </div>
      {/* School category */}
      <div className="container px-4 sm:px-20 flex  mt-4 sm:mt-[88px] sm:grid sm:grid-cols-3 flex-col gap-4 sm:flex-wrap sm:mb-[86px]">
        {EmployeeUniqueData.map(({ icon, title, description }) => (
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
       title="Employee transportation service for business"
       desc="We understand that every business is different – so with our
              employee shuttle service, you can order one small car or a whole
              fleet of vehicles. We can’t guarantee a synchronized driving
              display on arrival, but we can guarantee punctuality,
              traceability, timeliness, and cool tunes if that’s your thing."
      />

      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:mt-[116px] py-4">
        <MiniStickyBarMenu data={NeededInformations} />
        <div id="info-1" className="hidden h-20"></div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0">
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            What is the Impact of Using an Employee Shuttle Service?
          </h1>
          <div className="w-full flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              Employee productivity and satisfaction
            </h1>
            <p>
              A shuttle service reduces commute stress, leading to more relaxed,
              productive employees who start their day refreshed.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              🌿Sustainability and environmental
            </h1>
            <p>
              Fewer cars on the road mean lower carbon emissions, aligning with
              sustainability goals and reducing ecological footprints.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              🤝Corporate social responsibility
            </h1>
            <p>
              Offering a shuttle service shows commitment to employee well-being
              and environmental stewardship, enhancing company image.‍
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              🧑‍🦽Accessibility and inclusivity
            </h1>
            <p>
              Shuttle services make workplaces more accessible to those without
              private transport, promoting a diverse workforce.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              🚗 Traffic congestion and emission reduction
            </h1>
            <p>
              Employee shuttles ease traffic congestion and lower vehicle
              emissions, contributing to cleaner air and a healthier
              environment.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              💸 Cost savings for you
            </h1>
            <p>
              A shuttle service can reduce the need for extensive parking
              facilities and may offer tax incentives related to sustainable
              practices.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              💲 Cost savings for your team
            </h1>
            <p>
              Employees save on gas, maintenance, and parking, increasing
              financial relief and job satisfaction.
            </p>
          </div>
          <div className="mt-6 flex flex-col" id="info-2">
            <h1 className="font-semibold text-xl sm:text-2xl mb-6">
              🤝 Support local business
            </h1>
            <p>
              Treepz&lsquo;s partnership with local shuttle providers boosts the
              local economy and strengthens community connections, enhancing
              service reliability and community engagement.
            </p>
          </div>
          <div className="flex flex-col space-y-6 border-y mt-6 py-6">
            <h1 className="font-semibold text-xl sm:text-2xl">
              How much does it cost?
            </h1>
            <p className="text-lg text-[#6F7174]">
              We will listen to your requirements and take into account your
              budget, then come up with an employee transport package – or a
              one-off journey plan – that matches exactly what you need.
            </p>
            <p id="info-3">
              Don’t be shy: get in touch for a no-nonsense conversation today.
            </p>
            <Button
              variant={"default"}
              className="mt-6 w-fit sm:w-[159px] sm:h-[64px] sm:mt-10 sm:mb-[48px] h-[64px]"
              onClick={showModal}
            >
              Get in touch
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="flex flex-col space-y-6 mt-12">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              An Employee Shuttle Service You Can Rely on
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              There is a lot to think about when it comes to arranging
              transportation services for your business – but we have everything
              wrapped up
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
          <div className="flex flex-col space-y-6 my-6" id="info-4">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Drill Down to the Detail
            </h1>
            <p className="text-lg text-[#6F7174]">
              Whether you have a couple of people in your team or a thousand
              employees, an employee shuttle service can make all the difference
              to your working day. We will tailor all your logistics to you – we
              have a whole range of vehicles from executive SUVs, transit vans,
              sprinter vans, mini-coaches, and motor coaches.
            </p>

            <p className="text-lg text-[#6F7174]">
              With Treepz, your team will have a relaxing and productive journey
              thanks to our amenities like secure WiFi and USB charging ports as
              standard. We can also offer you vehicles with reclining seats, air
              conditioning, and PA systems.
            </p>
            <p className="text-lg text-[#6F7174]">
              To keep things straightforward and consistent, when you book with
              Treepz, you will receive a dedicated employee shuttle service
              account manager and 24/7 support. Not only do they organize
              everything for you in the beginning, but they will regularly check
              ongoing performance through our data collection feature, then
              suggest new improvements.
            </p>
            <p className="text-lg text-[#6F7174]">
              And that’s not all. We can even help you come up with an effective
              launch plan to maximize engagement.
            </p>

            <Button
              variant={"default"}
              className="mt-6 w-fit sm:w-[263px] sm:h-[64px] sm:mt-10 sm:mb-[48px]"
              onClick={showModal}
              //onClick={() => {}}
            >
              Find how Treepz can help
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/employee-1.png"
              alt="employee"
              fill
              sizes="100vw, 100vh"
              priority
              className="object-cover absolute"
            />
          </div>
          {/* start */}
          <div className="mt-11 border-b pb-11" id="info-5">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              So, What Are the Options?
            </h1>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Home to Work
              </h1>
              <p className="text-lg text-[#6F7174]">
                The most simple and effective choice – this service will pick up
                your commuters near their home and take them to work and back.
              </p>
            </div>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">Last Mile</h1>
              <p className="text-lg text-[#6F7174]">
                With this service, you can connect your business with a local
                transit hub and then seamlessly transfer your team to work via
                their chosen method of public transport.
              </p>
            </div>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Intra-Campus
              </h1>
              <p className="text-lg text-[#6F7174]">
                If your campus is spread out and has several buildings or
                parking lots, you can arrange regular shuttles between sites.
                This allows for seamless transitions between meetings and other
                workplace events.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h1 className="font-semibold text-xl sm:text-2xl">Pack & Ride</h1>
              <p className="text-lg text-[#6F7174]">
                Organize easy collections from pre-arranged parking locations so
                that your employees can make it to work on time and cool as a
                cucumber.
              </p>
            </div>
            <div className="flex flex-col space-y-6" id="info-6">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Carpooling feature
              </h1>
              <p className="text-lg text-[#6F7174]">
                If you have employees who live close to one another, Treepz can
                provide a carpooling feature that allows them to share rides.
                This significantly lowers the number of cars on the road and
                reduces traffic congestion.
              </p>
            </div>
          </div>

          {/* End */}
          <div className="mt-11 border-b pb-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
              It’s a Win-Win for Your Business
            </h1>
            <div className="flex flex-col space-y-6 my-6">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Employee Transportation Companies Near Me
              </h1>
              <p className="text-lg text-[#6F7174]">
                If you are looking for a reliable employee shuttle service that
                gets your team to work feeling less hassled and more productive,
                check out Treepz! You can simply contact us now for your FREE
                bespoke quote.
              </p>
            </div>
            <Button
              variant={"default"}
              className="font-mediummt-6 w-fit sm:w-[241px] mx-auto sm:h-[64px] sm:mt-10 sm:mb-[48px]"
              onClick={showModal}
              //onClick={() => {}}
            >
              Get your custom quote
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
    </>
  );
}

export default EmployeeTransComponent

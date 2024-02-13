'use client'
import Image from 'next/image'
import { Button } from '../ui/button';
import OurPartners from '../Hero/partners';
import { OurPartnersData } from '../Hero/data';
import { ConferenceSolutionData } from '@/lib/dummyData';
import CompaniesWithSolution from '@/components/common/companyWithSolution'
import Testimony from '@/components/common/testimony'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'


const ConferenceComponent = () => {
    return (
      <>
        <div className="container px-4 sm:px-20 mt-10">
          <div className="w-full h-[479px] sm:h-[620px] relative overflow-hidden">
            <Image
              src="/conference-hero.png"
              alt="hero"
              fill
              priority
              className="object-fill absolute"
            />
            <div className="flex justify-center items-center flex-col w-full sm:w-[670px] mx-auto text-center sm:h-[204px] text-white absolute top-20 sm:top-44 left-0 right-0">
              <h1 className="text-[32px] uppercase w-full sm:w-[569px] text-center sm:text-[56px] font-bold sm:leading-[64px] mb-5">
                TREEPZ CORPORATE SHUTTLE
              </h1>
              <p className="text-xl">
                Get your team back into the office with safe, reliable, and
                affordable commuter shuttling
              </p>
              <Button
                variant={"default"}
                className="cursor-pointer rounded-full w-fit mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2"
                //onClick={() => {}}
              >
                Connect with us
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div className="container px-4 sm:px-20 flex flex-col mt-[75px] mb-[113px]">
            <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
              {}
              Trusted by Your Favorite Businesses
            </p>
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center ">
              {OurPartnersData.map(({ src }: any) => (
                <OurPartners src={src} key={src} />
              ))}
            </div>
          </div>
          {/* company Solution */}
          <div className="flex flex-col sm:flex-row items-center gap-[73px]">
            {ConferenceSolutionData.map(
              ({ icon, title, description }, index) => (
                <CompaniesWithSolution
                  icon={icon}
                  title={title}
                  description={description}
                  key={index}
                />
              )
            )}
          </div>
        </div>
        <Testimony />
        <div className="bg-[url(/layer-bg.png)] bg-fill sm:bg-cover bg-no-repeat w-full h-[450px] sm:h-[333px] flex justify-center items-center px-4 sm:px-0">
          <div className="w-full sm:w-[695px] flex flex-col justify-center items-center text-white">
            <p className="text-xl text-center sm:text-left">
              Planning a corporate trip? Let our team of experts help you
            </p>
            <h1 className="text-[32px] sm:text-[56px] font-semibold sm:leading-[64px] mb-6 w-full text-center">
              Treepz Corporate Shuttles
            </h1>
            <Button
              variant={"default"}
              className="cursor-pointer flex rounded-full w-fit mx-auto mt-5 font-semibold text-gray-900 flex items-center gap-2"
              //onClick={() => {}}
            >
              Get a quote
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
        <div className="container px-4 sm:px-20 my-10 sm:my-14">
          <h1 className="text-[#212529] font-bold uppercase">
            Popular way to treepz
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
            <div className="w-full sm:w-[292px] py-4 px-[12px] sm:gap-4 rounded-2xl mt-10 shadow">
              <div className="w-full sm:w-[268px] h-[205px] relative overflow-hidden">
                <Image
                  src="/lagos.png"
                  fill
                  priority
                  alt="lagos"
                  className="object-cover sm:object-contain absolute"
                />
              </div>
              <h1 className="text-[28px] sm:text-[32px] text-[#4D5154] mt-6 mb-10 font-semibold">
                Lagos
              </h1>
              <p className="text-xl sm:text-2xl text-[#6F7174]">20 people</p>
            </div>
            <div className="w-full sm:w-[292px] py-4 px-[12px] gap-4 rounded-2xl mt-10 shadow">
              <div className="w-full sm:w-[268px] h-[205px] relative overflow-hidden">
                <Image
                  src="/kampala.png"
                  fill
                  priority
                  alt="lagos"
                  className="object-cover sm:object-contain absolute"
                />
              </div>
              <h1 className="text-[32px] text-[#4D5154] mt-6 mb-10 font-semibold">
                Kampala
              </h1>
              <p className="text-2xl text-[#6F7174]">20 people</p>
            </div>
            <div className="w-full sm:w-[292px] py-4 px-[12px] gap-4 shadow rounded-2xl mt-10">
              <div className="w-full sm:w-[268px] h-[205px] relative overflow-hidden">
                <Image
                  src="/abuja.png"
                  fill
                  priority
                  alt="lagos"
                  className="object-cover sm:object-contain absolute"
                />
              </div>
              <h1 className="text-[32px] text-[#4D5154] mt-6 mb-10 font-semibold">
                Abuja
              </h1>
              <p className="text-2xl text-[#6F7174]">20 people</p>
            </div>
            <div className="w-full sm:w-[292px] py-4 px-[12px] gap-4 shadow rounded-2xl mt-10">
              <div className="w-full sm:w-[268px] h-[205px] relative overflow">
                <Image
                  src="/nairobi.png"
                  fill
                  priority
                  alt="lagos"
                  className="object-cover sm:object-contain absolute"
                />
              </div>
              <h1 className="text-[32px] text-[#4D5154] mt-6 mb-10 font-semibold">
                Nairobi
              </h1>
              <p className="text-2xl text-[#6F7174]">20 people</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between container px-4 sm:px-20 sm:my-14">
          <div className="w-full sm:w-[624px] h-[320px] sm:h-[552px] relative mb-8 sm:mb-0">
            <Image
              src="/treepz-bg.png"
              alt="bg"
              fill
              priority
              className="object-contain absolute"
            />
          </div>
          <div className="w-full sm:w-[516px] border-t border-gray-900 pt-8">
            <h1 className="w-full sm:w-[384px] sm:text-[40px] sm:leading-[48px]">
              Treepz operates 100% carbon neutral
            </h1>
            <p className="text-[#4D5154] text-xl mt-8">
              We believe in sustainable future. That’s why we offset all carbon
              emissions of our rides.
            </p>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full w-fit font-semibold mt-8 sm:mt-14 text-black flex items-center gap-2"
              //onClick={() => {}}
            >
              Get a quote
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </>
    );
}

export default ConferenceComponent

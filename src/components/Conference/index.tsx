'use client'
import Image from 'next/image'
import { Button } from '../ui/button';
import OurPartners from '../Hero/partners';
import { OurPartnersData } from '../Hero/data';
import { ConferenceSolutionData } from '@/lib/dummyData';
import CompaniesWithSolution from '@/components/common/companyWithSolution'
import Testimony from '@/components/common/testimony'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import { useModal } from '@/contexts/ModalContext';

import { usePathname, useRouter } from 'next/navigation'
const ConferenceComponent = () => {
const {showModal} = useModal();
    const router = useRouter();
    return (
      <>
        <div className="container px-4 sm:px-20 mt-32">
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
                className="mt-5 w-fit px-5 py-4 sm:w-[168px] mx-auto sm:h-[64px] font-medium"
                            onClick={showModal}
                //onClick={() => {}}
              >
                Connect with us
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
                <h1 className='uppercase font-bold max-w-[527px] mb-[52px] sm:text-[32px] '>
                Providing Hundreds of <br/> Companies With Solutions</h1>
          <div className="flex flex-col sm:flex-row items-center sm:mb-[100px] gap-[73px]">
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
              className="w-fit sm:w-[144px] mx-auto font-semibold sm:h-[64px]"
            onClick={showModal}
            >
              Get a quote
            </Button>
          </div>
        </div>
        <div className="container px-4 sm:px-20 my-10 sm:my-14">
          <h1 className="text-[#212529] font-bold uppercase">
            Popular way to treepz
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
            <div className="w-full sm:w-[292px] py-4 px-[12px] sm:gap-4 rounded-2xl mt-10 genShadow">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between container px-4 sm:px-20 sm:mt-[177px]">
          <div className="w-full sm:w-[624px] h-[320px] sm:h-[552px] relative mb-8 sm:mb-0">
            <Image
              src="/treepz-bg.png"
              alt="bg"
              fill
              sizes='100vw'
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
              className="cursor-pointer rounded-full w-fit sm:w-[156px] font-semibold mt-8 sm:mt-[54px] sm:h-[64px]"
              onClick={showModal}
            >
              Get a quote
              <ChevronRightIcon />
            </Button>
          </div>  
        </div>
  <div className="relative w-full sm:max-w-[1640px] mt-[50px] sm:mt-[200px]  h-[176.66px] sm:h-[377.861px] mx-auto">
          <Image
            src="/footer-header.png"
            alt="footer"
            sizes="100vw"
            fill
            priority
            className="absolute object-contain"
          />
        </div>

  <div className="relative z-10 bg-[url(/cta-card.png)] bg-cover bg-no-repeat bg-black p-4 sm:p-14 rounded-2xl sm:rounded-[32px] w-full sm:w-[1138px] sm:mx-auto -mt-16 flex justify-center shadow">

          <div className="w-full sm:w-[791px] mx-auto text-white">
            <h1 className="text-[28px] sm:text-[56px] text-white font-semibold mb-8 w-full text-center sm:w-[841px] sm:leading-[64px]">
              WE ARE HERE TO HELP
            </h1>
            <p className="text-xl text-[#DEE0E3] text-center w-full">
Submit your event details and we’ll reach out within 24 hours. We’re here to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row w-full  mt-11  justify-center items-center">
              <Button
                variant={"default"}
                className="w-full sm:w-[200px] sm:h-[64px] relative overflow-hidden group"
                onClick={showModal}
              >
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Get in touch
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Get in touch
            </span>
                
              </Button>
    
            </div>
          </div>
            </div>
      </>
    );
}

export default ConferenceComponent

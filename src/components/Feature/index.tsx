import React from 'react'
import PostalCard from './card';
import Image from 'next/image';
import PreviousIcon from '@/assets/svgs/previous-arrow-icon.svg'
import NextIcon from '@/assets/svgs/next-arrow-icon.svg'
import { PostalCardData } from '@/lib/dummyData';
import Slider from '../common/Testing';

const images = [
  '/non-eme-hero.png',
  '/press-hero.png',
  '/street.png',
  '/Hero.png',
];
const slides = [
  {
    src: "/testimony/brighter-money.png",
    message:
      "Treepz has consistently assigned to us experienced and helpful drivers which has enabled us build a long term relationship.",
    sender: "Xenia Wachira",
    position: "Country Manager, Brighter Monday",
  },
  {
    src: "/testimony/liberty.png",
    message: "Our experience with Treepz car rentals has been exceptional. The quality of vehicles deployed and drivers who are knowledgeable about various destinations is impressive. Thank you for making our field movements a pleasant experience!",
    sender: "Joanita",
    position: "Administration Officer, Liberty Life Assurance",
  },
  {
    src: "/testimony/opportunity-bank.png",
    message: "Using Treepz has significantly reduced the stress of car rentals for us. The service delivery has been good and so far we haven't had any major issues of concern.",
    sender: "Abdallah Ssendi",
    position: "Procurement and Admin, Opportunity Bank",
  },
  {
    src: "/testimony/Techstars.png",
    message: "Treepz made our Techstars Lagos program unforgettable by providing top-notch transportation for our tech startup founders and CEOs. The buses were modern, clean, and the entire process was efficient. Treepz exceeded our expectations, and we look forward to future collaborations!",
    sender: "Oluwadunni Fanibe",
    position: "Techstars Lagos Program Manager",
  },
];

const FeaturesComponent = () => {
  return (
    <div className="container px-4 sm:px-20 mt-4 sm:mt-10 space-y-4">
      <div className="w-full sm:w-[1022px] sm:mb-24">
        <h1 className="text-[28px] sm:text-3xl text-center sm:text-left font-bold uppercase text-[#212529] mb-6">
          how will treepz help you?
        </h1>
        <p className="text-center font-normal sm:text-left text-lg sm:text-xl text-[#4D5154]">
          We&lsquo;ve got you covered for all your personal and group
          transportation needs.
        </p>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 w-full mt-10 gap-4 sm:flex-wrap">
        {PostalCardData.map((item: any, index: number) => (
          <PostalCard
            src={item.src}
            title={item.title}
            index={index + 1}
            href={item.href}
            key={index}
          />
        ))}
      </div>
      <Slider slides={slides} />
      {/*  <CarouselWithShadcnUI /> */}
      {/* <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full !my-[67px] sm:!my-40 bg-[#FEF0EB] p-4 sm:px-12 sm:py-[76px] rounded-2xl sm:rounded-[32px]">
        <div className="flex justify-between items-center order-2 sm:order-first w-full">
          <div className='relative w-20 sm:w-[320px] h-10 sm:h-[160px]'>
            <Image
              src="/mtn-logo.png"
              alt="mtn-logo"
              fill
              priority
              className="absolute rounded-sm sm:rounded-lg object-contain"
            />
          </div>
          <div className="flex sm:hidden justify-between items-center gap-2 sm:w-[136px]">
            <span>
              <PreviousIcon />
            </span>
            <span className="w-14 h-14 bg-white flex justify-center items-center rounded-full">
              <NextIcon />
            </span>
          </div>
        </div>
        <div className="w-full sm:w-[657px]">
          <p className="font-semibold sm:w-[500px]">
            “Treepz took the huge job of our employee transportation off our
            hands, and project managed it in a way that made our top organizers
            proud.”
          </p>
          <div className="flex justify-between items-center my-8 sm:!mt-[64px]">
            <p className="text-base sm:text-xl text-[#212529] w-full">
              <span className="font-semibold">Adepoju Onyeka</span> / CEO, MTN
              Nigeria
            </p>
            <div className="hidden sm:flex justify-between items-center gap-2 sm:w-[136px]">
              <span>
                <PreviousIcon />
              </span>
              <span className="w-14 h-14 bg-white flex justify-center items-center rounded-full">
                <NextIcon />
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FeaturesComponent
'use client'
import Image from "next/image";
import ChevronRightWhiteIcon from "@/assets/svgs/chervon-right-white-nav.svg";
import ArrowRightWhiteIcon from "@/assets/svgs/arrow-right-white-line.svg";
import VideoComponent from "@/components/Media";
import Link from "next/link";

import { useModal } from '@/contexts/ModalContext';
const MediaComponent = () => {
  const { showModal } = useModal();

  return (
    <div className="bg-[#312604] w-full py-[88px] mt-[88px]">
      <div className="conatiner px-4 sm:px-20">
        <h1 className="text-white text-base font-semibold mb-8 uppercase">
          Media
        </h1>
        <div className="flex sm:gap-24 w-full flex-col sm:flex-row">
          <div className="w-full sm:max-w-[1272px] relative overflow-hidden rounded-2xl">
            <VideoComponent src="AdK2ds2NAu4?si=AKChd8d5P1Mb8-Js" />
            <div className="absolute bottom-8 ml-9 text-white flex flex-col space-y-2">
              <h1>Moving in the heart of Africa</h1>
              <div className="flex gap-4 items-center justify-between w-fit">
                <p>Watch the video</p>
                <ChevronRightWhiteIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 sm:mt-[128px] w-full flex flex-col text-white">
          <h1 className="text-base font-semibold">
            EXPLORE OUR BUSINESS SOLUTIONS
          </h1>
          <div className="mt-[56px] w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="rounded-2xl p-6 border-2 border-white/80 w-full sm:w-[548px] justify-between bg-[#423409]">
              <div>
                <h1 className="text-white text-2xl font-semibold capitalize mb-3">
                  For Businesses
                </h1>
                <p>
                  Improve your employees productivity through employee commute
                </p>
              </div>
              <Link href="/business-solutions">
                <div className="w-full sm:w-[116px] font-medium flex justify-between mt-10">
                  <p>Learn more</p>
                  <ArrowRightWhiteIcon />
                </div>
              </Link>
            </div>
            <div className="rounded-2xl p-6 border-2 border-white/80 w-full sm:w-[548px] justify-between bg-[#423409]">
              <div>
                <h1 className="text-white text-2xl font-semibold capitalize mb-3">
                  Car rentals
                </h1>
                <p>
                  Improve your employees productivity through employee commute
                </p>
              </div>
              <div onClick={showModal} className="w-full sm:w-[116px] cursor-pointer font-medium flex justify-between mt-10">
                <p>Learn more</p>
                <ArrowRightWhiteIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaComponent;

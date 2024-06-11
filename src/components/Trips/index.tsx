'use client'
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "../ui/button";
import { useModal } from '@/contexts/ModalContext';

const BetterTogetherComponent = () => {
  const { showModal } = useModal();
  const pathname = usePathname()
  const router = useRouter()
  return (
      <div className="relative px-4 sm:pt-[111px]">
        <div className="relative w-full sm:max-w-[1640px] h-[176.66px] sm:h-[377.861px] mx-auto">
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
              TREEPZ ARE BETTER TOGETHER
            </h1>
            <p className="text-xl text-[#DEE0E3] text-center w-full">
              We believe in partnerships, not transactions. Our dedicated team goes above and beyond to tailor solutions that perfectly fit your unique needs. Forget one-size-fits-all – with Treepz, you get a personalized experience that exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-11 sm:w-[452px] mx-auto">
              <Button
                variant={"default"}
                className="w-full sm:w-[284px] sm:h-[64px] relative overflow-hidden group"
                onClick={() => router.push("/business-solutions")}
              >
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Explore our business solutions
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Explore our business solutions
            </span>
                
              </Button>
              <Button
                variant={"outline"}
                className="!bg-transparent text-white border-white w-full sm:w-[156px] hover:text-white sm:h-[64px] group overflow-hidden relative"
                onClick={showModal}
              >
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Contact us
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Contact us
            </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BetterTogetherComponent;

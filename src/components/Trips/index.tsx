'use client'
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "../ui/button";
import { useModal } from '@/contexts/ModalContext';

const BetterTogetherComponent = () => {
  const { showModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="relative w-full -mt-7 mb-9">
      <div className="relative mb-4">
        <Image
          src="/footer-header.png"
          alt="Footer Image"
          width={1200}
          height={600}
          priority
          className="w-full h-auto object-cover"
          unoptimized
        />
      </div>
      <div className="bg-black text-white p-14 sm:px-20 px-9 rounded-2xl sm:w-3/4 w-[80%] mx-auto relative sm:mt-0 -mt-12 bg-[url(/cta-card.png)] bg-cover bg-no-repeat custom-gradient">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-center">
          DOWNLOAD MOBILITY REPORT
        </h2>
        <p className="text-[#DEE0E3] text-sm sm:text-base text-center">
          Gain exclusive insights into Africa&apos;s corporate transportation landscape and discover how leading companies are optimizing their mobility solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-[378px] mx-auto">
          <Button
            variant="default"
            className="relative overflow-hidden sm:w-[210px] w-full sm:h-[45px] text-center items-center sm:px-[2px] group"
            onClick={() => router.push("/business-solutions")}
          >
            <span className="transition-transform font-semibold duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Download Report for Free
            </span>
            <span className="transition-transform font-semibold duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Download Report for Free
            </span>
          </Button>
          <Button
            variant="outline"
            className="relative !bg-transparent text-white border-white sm:w-[150px] sm:h-[45px] group overflow-hidden"
            onClick={() => showModal('share')}
            aria-label="contact us"
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
  );
};

export default BetterTogetherComponent;

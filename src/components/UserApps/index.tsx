'use client'
import Image from "next/image";
import React from "react";
import CheckedIcon from "@/assets/svgs/checked-icon.svg";
import { Button } from "../ui/button";
import BlogComponent from "../Blog";

const InforArray = [
  "Streamlined technology",
  "Track your trips",
  "Make changes anytime",
  "Stress-free trips",
];

const UsersAppComponent = () => {
  return (
    <div className="bg-[#16171D] w-full">
      <div className="container px-4 sm:px-20 mt-4 sm:mt-24 py-4 sm:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative w-full sm:w-[624px] h-[282px] sm:h-[552px]">
            <Image
              src="/passengerApp.png"
              alt="passenger App"
              fill
              priority
              className="object-contain absolute"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[516px] border-t border-white pt-4 mb-14">
            <h1 className="text-[32px] font-semibold leading-[40px] text-white mb-10">
              Passenger App
            </h1>
            <p className="text-xl text-[#DEE0E3] w-full">
              With the Treepz app, you&lsquo;re the boss of your ride. Track
              your driver in real-time, see all your trip details in one tap,
              tweak things on the fly, and even adjust your group size - all
              with a few finger swipes. It&lsquo;s your ride, your way, made
              easy.
            </p>
            <div className="flex flex-col mt-10 space-y-3">
              {InforArray.map((info, index) => (
                <div className="flex gap-4 items-center text-white" key={index}>
                  <CheckedIcon />
                  <span>{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-14 py-4 container px-4 sm:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col w-full sm:w-[516px] border-t border-white pt-4 mb-14">
            <h1 className="text-[32px] font-semibold leading-[40px] text-white mb-10">
              Tracking dashboard
            </h1>
            <p className="text-xl text-[#DEE0E3] w-full">
              Treepz puts the power in your pocket. Track your driver in
              real-time, see all your trips happening live, and get instant
              updates - no matter how big or small. With Treepz, you&lsquo;re
              always in the know, so you can focus on the fun, not the
              logistics.
            </p>
            <Button
              variant={"default"}
              className="hover:bg-white bg-white w-full sm:w-[144px] sm:h-[52px] mt-5 sm:mt-14 group overflow-hidden relative"
              //onClick={() => {}}
            >
               <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                Learn More
              </span>
              <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                Learn More
              </span>
              
            </Button>
          </div>
          <div className="relative w-full sm:w-[624px] h-[282px] sm:h-[552px]">
            <Image
              src="/tracking-dashboard.png"
              alt="Tracking Board"
              fill
              priority
              className="object-contain absolute"
            />
          </div>
        </div>
      </div>
      <BlogComponent />
    </div>
  );
};

export default UsersAppComponent;

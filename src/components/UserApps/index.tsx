'use client'
import Image from "next/image";
import React from "react";
import CheckedIcon from "@/assets/svgs/checked-icon.svg";
import { Button } from "../ui/button";
import BlogComponent from "../Blog";

const InforArray = [
  "Intuitive technology",
  "Overview your trips or trips",
  "Make changes anytime",
  "Say goodbye to pre-journey stress!",
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
              We want you to feel cool, calm, and in control – that’s why we
              have a specially designed Treepz app to help you track your
              driver, access all your journey details, make changes to details
              or routes, scale your trips up or down, and even contact our team.
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
              We won&lsquo;t leave you hanging – every ride you book with Treepz
              can be tracked on our app. Run it for one-off trips or large
              events, and receive a bird&lsquo;s-eye view of all trips happening
              with real-time updates.
            </p>
            <Button
              variant={"default"}
              className="hover:bg-white bg-white w-full sm:w-[144px] sm:h-[52px] mt-5 sm:mt-14"
              //onClick={() => {}}
            >
              Learn More
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

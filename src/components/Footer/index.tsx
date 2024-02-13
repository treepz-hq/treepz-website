import Image from "next/image";
import React from "react";
import Link from "next/link";
import { companyLists, groupLists, socialMediaLists, solutionsLists } from "@/lib/dummyData";

const Footer = () => {
  return (
    <div className="container px-4 sm:px-20">
      <div className="mt-20 flex flex-col sm:flex-row mx-auto w-full justify-between border-b border-gray-100 sm:pb-[88px]">
        <div className="w-full sm:w-[298px] flex flex-col">
          <div className="relative w-[90px] h-[24px] cursor-pointer mb-5">
            <Image
              src="/Logo.png"
              alt="logo"
              className="object-contain absolute"
              fill
              priority
            />
          </div>
          <p className="text-[#4D5154] text-sm">
            Treepz is an all-in-one transportation solution for all your
            transportation needs - from commuter shuttling, executive VIP
            transportation, and large-scale events.
          </p>
        </div>
        <div className="w-full sm:w-[730px] flex flex-col sm:flex-row justify-between">
          <div className="w-[196px]">
            <h1 className="text-xs text-[#6F7174] uppercase mb-6">Solutions</h1>
            <div className="flex flex-col gap-1 text-sm text-[#4D5154]">
              {solutionsLists.map(({label, href}, index) => (
                <Link href={`/${href}`} key={index}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[215px]">
            <h1 className="text-xs text-[#6F7174] uppercase mb-6">
              GROUP TRANSPORTATION SERVICES
            </h1>
            <div className="flex flex-col gap-1 text-sm text-[#4D5154]">
              {groupLists.map((link, index) => (
                <Link href={`/${link}`} key={index}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[159px]">
            <h1 className="text-xs text-[#6F7174] uppercase mb-6">company</h1>
            <div className="flex flex-col gap-1 text-sm text-[#4D5154]">
              {companyLists.map((link, index) => (
                <Link href={`/${link.href}`} key={index}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row space-y-4 justify-between items-center py-10">
        <p className="text-[#666] text-[15px] leading-[20px]">
          © 2023 Treepz, Inc. All rights reserved.
        </p>
        <div className="flex gap-2 items-center text-sm text-[#4D5154]">
          {socialMediaLists.map((link, index) => (
            <Link href={`/${link.href}`} key={index}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

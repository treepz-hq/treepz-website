'use client'
import React from "react";
import Link from "next/link";
import { companyLists, groupLists, socialMediaLists, solutionsLists } from "@/lib/dummyData";
import Company_Logo from "@/assets/svgs/Logo.svg";
import { useRouter, usePathname } from "next/navigation";
import clsx from 'clsx'



const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()

  console.log(pathname)
  return (
    <div className={clsx({
      "w-full pt-[88px] mt-10": true,
      "bg-[#F7F7F7]": ['/employee-transportation'].includes(pathname)
    })}>
    <div className="container px-4 sm:px-20">
      <div className="flex flex-col sm:flex-row mx-auto w-full justify-between border-b border-gray-100 sm:pb-[88px]">
        <div className="w-full sm:w-[298px] flex flex-col">
          <span
            className="cursor-pointer mb-4"
            onClick={() => router.push("/")}
          >
            <Company_Logo />
          </span>
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
              {solutionsLists.map(({ label, href }, index) => (
                <Link
                  href={`/${href}`}
                  key={index}
                  className="transition duration-300 ease-in-out hover:underline my-1"
                >
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
                <Link href={`/${link}`} key={index} className="transition duration-300 ease-in-out hover:underline my-1">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[159px]">
            <h1 className="text-xs text-[#6F7174] uppercase mb-6">company</h1>
            <div className="flex flex-col gap-1 text-sm text-[#4D5154]">
              {companyLists.map((link, index) => (
                <Link href={`/${link.href}`} key={index} className="transition duration-300 ease-in-out hover:underline my-1">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row space-y-4 justify-between items-center py-10">
        <p className="text-[#666] text-[15px] leading-[20px]">
          © 2024 Treepz, Inc. All rights reserved.
        </p>
        <div className="flex gap-2 items-center text-sm text-[#4D5154]">
          {socialMediaLists.map((link, index) => (
            <Link href={`/${link.href}`} key={index} className="transition duration-900 ease-in-out hover:text-red-500 my-1">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

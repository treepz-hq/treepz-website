'use client'
import React, { useState } from "react";
import Link from "next/link";
import { companyLists, groupLists, socialMediaLists, solutionsLists } from "@/lib/dummyData";
import Company_Logo from "@/assets/svgs/Logo.svg";
import { useRouter } from "next/navigation";
import clsx from 'clsx';
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  const [dropdown, setDropdown] = useState({
    solutions: false,
    group: false,
    company: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (section: 'solutions' | 'group' | 'company') => {
    setDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],  // This will now be safe
    }));
  }

  return (
    <div
      className={clsx({
        "w-full pt-[50px]": true,
        "bg-[#F7F7F7] mt-[26px]": true,
        "sm:bg-transparent sm:mt-0": true,
      })}
    >
      <div className="container relative px-4 sm:px-20">
        <div className="flex flex-col sm:flex-row mx-auto w-full justify-between border-b border-gray-100 sm:pb-[88px]">
          <div className="w-full sm:w-[298px] flex flex-col mb-6 sm:mb-0">
            <span
              className="cursor-pointer mb-4"
              onClick={() => router.push("/")}
            >
              <Company_Logo />
            </span>
            <p className="text-[#4D5154] text-sm sm:text-base">
              Treepz is an all-in-one transportation solution for all your transportation needs - from commuter shuttling, executive VIP transportation, and large-scale events.
            </p>
          </div>

          <div className="flex gap-4 mb-4 sm:hidden"> {/* Only show on small screens */}
            <Image
              src='/App-Store.png'
              alt="google"
              width={100}
              height={100}
              className="w-[100px] h-auto"
              unoptimized
            />
            <Image
              src='/Google-Play.png'
              alt="google"
              width={100}
              height={100}
              className="w-[100px] h-auto"
              unoptimized
            />
          </div>

          {/* On large screens, display solutions, group, and company sections in a vertical list (column) */}
          <div className="w-full sm:w-[730px] flex flex-col sm:flex-row sm:justify-between sm:gap-8">
            {/* Solutions Section */}
            <div className="w-full sm:w-auto mb-6 sm:mb-0">
              <h1
                className="text-semibold text-[#4D5154] mb-6 cursor-pointer flex justify-between items-center sm:block"
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <span
                  className={`transition-transform transform ${dropdown.solutions ? 'rotate-180' : ''} w-2 h-2 border-b-2 border-r-2 border-[#4D5154] sm:hidden`}
                />
              </h1>
              <div className={`flex flex-col gap-2 text-sm text-[#4D5154] ${dropdown.solutions ? "block" : "hidden"} sm:flex`}>
                {solutionsLists.map(({ label, href }, index) => (
                  <Link
                    href={`/${href}`}
                    key={index}
                    className="relative transition-colors duration-700 group w-fit"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4D5154] transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Group Transportation Services Section */}
            <div className="w-full sm:w-auto mb-6 sm:mb-0">
              <h1
                className="text-semibold text-[#4D5154] mb-6 cursor-pointer flex justify-between items-center sm:block"
                onClick={() => toggleDropdown('group')}
              >
                Group Transportation Services
                <span
                  className={`transition-transform transform ${dropdown.group ? 'rotate-180' : ''} w-2 h-2 border-b-2 border-r-2 border-[#4D5154] sm:hidden`}
                />
              </h1>
              <div className={`flex flex-col gap-1 text-sm text-[#4D5154] ${dropdown.group ? "block" : "hidden"} sm:flex`}>
                {groupLists.map((link, index) => (
                  <Link
                    href={`/${link?.href}`}
                    key={index}
                    className="transition duration-300 ease-in-out hover:underline my-1"
                  >
                    {link?.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="w-full sm:w-auto">
              <h1
                className="text-semibold text-[#4D5154] mb-6 cursor-pointer flex justify-between items-center sm:block"
                onClick={() => toggleDropdown('company')}
              >
                Company
                <span
                  className={`transition-transform transform ${dropdown.company ? 'rotate-180' : ''} w-2 h-2 border-b-2 border-r-2 border-[#4D5154] sm:hidden`}
                />
              </h1>
              <div className={`flex flex-col gap-1 text-sm text-[#4D5154] ${dropdown.company ? "block" : "hidden"} sm:flex`}>
                {companyLists.filter(link => link.label !== 'Terms & Conditions' && link.label !== 'Privacy & Cookie Policy').map((link, index) => (
                  <Link
                    href={link.href.includes('blog') ? link.href : `/${link.href}`}
                    key={index}
                    className="transition duration-300 ease-in-out hover:underline my-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer section for Terms & Conditions, Privacy & Cookie Policy and Social Media */}
        <div className="w-full sm:flex sm:justify-between sm:items-center mt-6 sm:mt-0">
          <div className="sm:flex sm:gap-4 sm:items-center">
            {/* On small screens: show Terms & Conditions and Privacy & Cookie Policy side by side */}
            <div className="sm:hidden space-x-2">
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/privacy-cookie-policy" className="hover:underline">
                Privacy & Cookie Policy
              </Link>
            </div>

            {/* On large screens: hide Terms & Conditions and Privacy & Cookie Policy */}
            <div className="hidden sm:flex gap-4 items-center">
              {socialMediaLists.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="transition duration-900 ease-in-out hover:text-red-500 my-1"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Year Text */}
          <div className="sm:ml-auto mt-6 sm:mt-0 text-center sm:text-right sm:flex sm:items-center sm:justify-between">
            <p className="text-[#666] text-[15px] leading-[20px] sm:text-base">
              © 2024 Treepz, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

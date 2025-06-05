'use client'
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  CorporateTransportation,
  GroundTransportation,
  GroupTransport,
  HealthCareTransportation,
  SchoolTransport,
  TransitAgencyTransportation,
} from "../data";
import useClickOutside from "@/lib/utils";

interface IProps {
  items?: any;
  setSelectedMenu?: any;
  closeMenu?: any;
}

const SolutionsSubMenu: React.FC<IProps> = ({
  items,
  setSelectedMenu,
  closeMenu,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSelectedMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedMenu]);

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <div
      ref={ref}
      className="flex absolute top-full left-0 bg-white mt-4 shadow-md rounded-md p-2 w-[843px] h-[404px] z-50"
    >
      <div className="flex flex-col w-[229px] pl-[12px]">
        <p className="text-[#6F7174] uppercase text-sm cursor-default">
          group Transportation services
        </p>
        <div className="mb-10 flex flex-col">
          {GroupTransport.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 text-[#212529] font-medium hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-[#6F7174] uppercase text-sm cursor-default">
          school Transportation services
        </p>
        <div className="flex flex-col">
          {SchoolTransport.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 font-medium text-[#212529]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[288px] px-6 mb-10 border-x border-gray-200">
        <p className="text-[#6F7174] uppercase text-sm cursor-default">
          corporate Transportation services
        </p>
        <div className="mb-3 flex flex-col w-[240px]">
          {CorporateTransportation.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 font-medium text-[#212529]"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-[#6F7174] uppercase text-sm cursor-default mt-2">
          ground Transportation services
        </p>
        <div className="flex flex-col">
          {GroundTransportation.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 font-medium text-[#212529]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[255px] pl-6 mb-10">
        <p className="text-[#6F7174] uppercase text-sm cursor-default w-full">
          healthcare Transportation services
        </p>
        <div className="mb-3 flex flex-col">
          {HealthCareTransportation.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 font-medium text-[#212529]"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-[#6F7174] uppercase text-sm cursor-default mt-10">
          ground Transportation services
        </p>
        <div className="flex flex-col">
          {TransitAgencyTransportation.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 font-medium text-[#212529]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSubMenu;

"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  GroupFirstColumn,
  GroupSecondColumn,
} from "../data";
import useClickOutside from "@/lib/utils";

interface IProps {
  items?: any;
  setSelectedMenu: any;
  type?: string;
  closeMenu?: any
}
const GroupSubMenu: React.FC<IProps> = ({ items, setSelectedMenu, closeMenu }) => {
   const ref = useClickOutside(() => {
     setSelectedMenu(null);
   });

    const handleMenuItemClick = () => {
      closeMenu();
    };

  return (
    <div
      ref={ref}
      className="flex absolute top-full left-0 bg-white mt-4 shadow-md rounded-md p-2 w-[456px] h-fit z-50"
    >
      <div className="flex flex-col flex-1 pl-[12px]">
        <div className="flex flex-col">
          {GroupFirstColumn.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-base py-1 text-[#212529] font-medium hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 pl-6 mb-10">
        <div className="mb-3 flex flex-col">
          {GroupSecondColumn.map(({ label, href }) => (
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

export default GroupSubMenu;

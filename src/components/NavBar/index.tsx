'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import MenuComponent from './Menu';
import { useRouter, usePathname } from 'next/navigation'
import CloseIcon from '@/assets/svgs/close-icon.svg'
import ArrowDownIcon from "@/assets/icons/ArrowDown";
import { NavMenu as MenuItems } from "./data";
import useClickOutside, { cn } from "@/lib/utils";
import Link from 'next/link'
import SolutionsSubMenu from "./SubMenus/Solutions";
import GroupSubMenu from "./SubMenus/GroupSubMenu";


const NavBar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

   const pathname = usePathname();

   const [openSubMenu, setOpenSubMenu] = useState(null);
   const [selectedMenu, setSelectedMenu] = useState(null);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

   const closeMenu = () => {
     setIsOpen(false);
   };

     const handleMenuClick = (item: any) => {
    setSelectedMenu(item.href);
    setOpenSubMenu(openSubMenu === item.label ? null : item.label);
  };

     const renderSubMenuItems = (item: any) => {
       switch (item) {
         case "group":
           return <GroupSubMenu setSelectedMenu={setSelectedMenu} />;
         case "solutions":
           return <SolutionsSubMenu setSelectedMenu={setSelectedMenu} />;
         default:
           return null;
       }
     };
  return (
    <div className="w-full sm:container h-12 sm:h-[72px] mx-auto flex justify-between items-center pt-[20px] pb-2 px-4 sm:px-28">
      <div className="flex sm:w-[702px] justify-between items-center">
        <div
          className="relative w-[90px] h-[24px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Logo.png"
            alt="logo"
            className="object-contain absolute"
            fill
            priority
          />
        </div>
        <MenuComponent />
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row gap-4">
        <Button
          variant={"outline"}
          className="cursor-pointer border-gray-900 rounded-full flex items-center gap-2"
          //onClick={() => {}}
        >
          Rent a car
        </Button>
        <Button
          variant={"default"}
          className="cursor-pointer rounded-full text-gray-900 flex items-center gap-2"
          //onClick={() => {}}
        >
          Explore our business solutions
        </Button>
      </div>
      <div className="sm:hidden cursor-pointer relative w-[48px] h-[44px]">
        <Image
          src="/hamburger.png"
          alt="hamburger"
          fill
          priority
          className="absolute"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex z-50">
          <div className="bg-white w-full max-w-sm h-full overflow-y-auto transform transition-transform ease-in-out duration-300">
            <div className="py-6 px-4">
              <div className="flex w-full items-center justify-end mb-8">
                <span className="cursor-pointer" onClick={closeMenu}>
                  <CloseIcon />
                </span>
              </div>
              <MenuComponent />
              {MenuItems.map((item) => (
                <nav
                  key={item.label}
                  className={cn(`flex flex-col gap-2 mt-8`)}
                >
                  {item.hasSubMenu ? (
                    <div
                      key={item.label}
                      className="flex items-center justify-between mr-2 space-y-6 cursor-pointer relative"
                      onClick={() => handleMenuClick(item)}
                    >
                      {item.label}
                      <ArrowDownIcon />
                      {openSubMenu === item.label &&
                        renderSubMenuItems(item?.type)}
                    </div>
                  ) : (
                    <Link
                      onClick={() => handleMenuClick(item)}
                      href={item.href}
                      className="flex items-center gap-x-1"
                    >
                      {item.label}
                    </Link>
                  )}
                </nav>
              ))}
              {/*  <ul className="space-y-4">
                <li onClick={closeMenu}>Link 1</li>
                <li onClick={closeMenu}>Link 2</li>
                <li onClick={closeMenu}>Link 3</li>
              </ul> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar
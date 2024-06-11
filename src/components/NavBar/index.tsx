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
import Company_Logo from '@/assets/svgs/Logo.svg'
import SolutionsSubMenu from "./SubMenus/Solutions";
import GroupSubMenu from "./SubMenus/GroupSubMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  CorporateTransportation,
  GroundTransportation,
  GroupTransport,
  HealthCareTransportation,
  SchoolTransport,
  TransitAgencyTransportation,
  GroupFirstColumn,
  GroupSecondColumn,
} from "./data";
import { useModal } from '@/contexts/ModalContext';


const NavBar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

   const pathname = usePathname();
  const targetPaths = ["/wedding-transportation", "/privacy", "/terms"];
  const bgClass = targetPaths.includes(pathname) ? "!bg-[#FDF3D8]" : "!bg-white";
   const [openSubMenu, setOpenSubMenu] = useState(null);
   const [selectedMenu, setSelectedMenu] = useState(null);
   const [subMenuItemClicked, setSubMenuItemClicked] = useState(false);
   const { showModal } = useModal();

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

   const closeMenu = () => {
     setIsOpen(false);
   };


const handleMenuClick = (item: any) => {
  setSelectedMenu(item.href);
  if (item.hasSubMenu) {
    setOpenSubMenu(openSubMenu === item.label ? null : item.label);
    setSubMenuItemClicked(false); // Reset submenu item click state
  } else {
    setOpenSubMenu(null); // Close the submenu
    setIsOpen(false); // Close the entire menu
  }
};

const handleSubMenuItemClick = () => {
  setSubMenuItemClicked(true);
};

     const renderSubMenuItems = (item: any) => {
       switch (item) {
         case "group":
           return (
             <div className="flex flex-col rounded-xl shadow h-fit pb-4">
              {GroupFirstColumn.map(({ label, href }: any) => (
                <Link href={href} key={label} title={label} className="hover:underline p-2">
                  {label}
                </Link>
              ))}
              {GroupSecondColumn.map(({ label, href }: any) => (
                <Link href={href} key={label} title={label} className="hover:underline p-2">
                  {label}
                </Link>
              ))}
            </div>
           );
         case "solutions":
           return (
            <div className="flex flex-col h-fit">
              {CorporateTransportation.map(({ label, href }: any) => (
                <Link href={href} key={label} title={label} className="hover:underline p-2">
                  {label}
                </Link>
              ))}
              {SchoolTransport.map(({ label, href }: any) => (
                <Link href={href} key={label} title={label} className="hover:underline p-2">
                  {label}
                </Link>
              ))}
            </div>

           );
         default:
           return null;
       }
     };
  return (
    <div
      className={`w-full sm:max-w-[1691px]  h-16 sm:h-[72px] mx-auto flex justify-between items-center py-[20px] px-4 sm:px-20 fixed top-0 z-50 ${pathname === "/contact" ? "bg-[#FFFBF1]" : bgClass || 'bg-white'}`}
    >
      <div className="flex sm:w-[702px] justify-between items-center">
        <span className="cursor-pointer mr-10" onClick={() => router.push("/")}>
          <Company_Logo />
        </span>
        <NavigationMenu className="hidden sm:inline-block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={` ${pathname === "/contact" ? "bg-[#FFFBF1]" : bgClass}`} >Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`${bgClass} grid gap-3 p-6 sm:w-[900px] lg:w-[900px] lg:grid-cols-3`}>
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col w-[229px] mr-2">
                        <p className={`text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4`}>
                          group Transportation services
                        </p>
                        <div className="mb-10 flex flex-col">
                          {GroupTransport.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                        <p className="text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4">
                          school Transportation services
                        </p>
                        <div className="flex flex-col">
                          {SchoolTransport.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-2 w-[300px] px-2 mb-5 border-x border-gray-100">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col w-[280px]">
                        <p className="text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4">
                          corporate Transportation services
                        </p>
                        <div className="mb-10 flex flex-col">
                          {CorporateTransportation.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                        <p className="text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4">
                          ground Transportation services
                        </p>
                        <div className="flex flex-col">
                          {GroundTransportation.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col w-[259px] ml-4 px-4">
                        <p className="text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4">
                          healthcare Transportation services
                        </p>
                        <div className="mb-10 flex flex-col">
                          {HealthCareTransportation.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                        {/* <p className="text-[#6F7174] hover:text-[#F8B02B] hover:bg-[#FDF2D0] uppercase text-sm cursor-default px-4"> */}
                        {/*   ground Transportation services */}
                        {/* </p> */}
                        <div className="flex flex-col">
                          {TransitAgencyTransportation.map(
                            ({ label, href }) => (
                              <ListItem href={href} key={label} title={label}>
                                {label}
                              </ListItem>
                            )
                          )}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Group Transportation Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`hover:!bg-none ${pathname === "/contact" ? "bg-[#FFFBF1]" : bgClass}`}>
                Group Transportation Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid gap-3 p-6  sm:w-[400px] lg:w-[500px] lg:grid-cols-2 ${bgClass}`}>
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col w-[229px] pl-[12px]">
                        <div className="flex flex-col">
                          {GroupFirstColumn.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col w-[229px] pl-[12px]">
                        <div className="flex flex-col">
                          {GroupSecondColumn.map(({ label, href }) => (
                            <ListItem href={href} key={label} title={label}>
                              {label}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={`${pathname === "/contact" ? "bg-[#FFFBF1]" : bgClass} ${navigationMenuTriggerStyle()} `}>
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={`${pathname === "/contact" ? "bg-[#FFFBF1]" : bgClass} ${navigationMenuTriggerStyle()} `}>
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row gap-4">
        <Button
          variant={"outline"}
          onClick={showModal}
          className={`font-medium w-fit sm:w-[144px] relative group overflow-hidden ${bgClass}`}
        >
          <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
            Rent a car
          </span>
          <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
            Rent a car
          </span>
        </Button>
        <Button
          variant={"default"}
          onClick={() => router.push("/business-solutions")}
          className="font-medium w-fit sm:w-[255px] relative overflow-hidden px-2 group"
        >
          <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
            Explore our business solutions
          </span>
          <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
            Explore our business solutions
          </span>
        </Button>
      </div>
      <div className="sm:hidden cursor-pointer relative w-[48px] h-[44px]">
        <Image
          src="/hamburger.png"
          alt="hamburger"
          fill
          sizes="100vw"
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
                      onClick={() => {
                        handleMenuClick(item);
                        handleSubMenuItemClick(); // Call the submenu item click handler
                      }}
                    >
                      {item.label}
                      <ArrowDownIcon />
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
                  {openSubMenu === item.label && (
                    <div
                      className={`submenu-container transition-all duration-300 ease-in-out overflow-hidden ${
                        openSubMenu === item.label ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col space-y-2">
                        {renderSubMenuItems(item?.type)}
                      </div>
                    </div>
                  )}
                </nav>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:bg-[#FDF2D0] duration-300 transition-all ease-in-out hover:text-[#F8B02B] focus:bg-[#FDF2D0] focus:text-[#F8B02B] w-full px-4",
            className
          )}
          {...props}
        >
          <p className="line-clamp-2 text-sm leading-snug text-[#212529] hover:text-[#F8B02B]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

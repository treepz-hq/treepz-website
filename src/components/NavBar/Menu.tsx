'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ArrowDownIcon from "@/assets/icons/ArrowDown";
import { NavMenu as MenuItems } from "./data";
import useClickOutside, { cn } from "@/lib/utils";
import SolutionsSubMenu from "./SubMenus/Solutions";
import GroupSubMenu from "./SubMenus/GroupSubMenu";

const MenuComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    setSelectedMenu(null);
    setOpenSubMenu(null);
    return () => {};
  }, [pathname]);

  const handleMenuClick = (item: any) => {
    setSelectedMenu(item.href);
    setOpenSubMenu(openSubMenu === item.label ? null : item.label);
  };

   const renderSubMenuItems = (item: any) => {
    switch (item) {
      case 'group':
        return (
          <GroupSubMenu
            setSelectedMenu={setSelectedMenu}
          />
        );
      case 'solutions':
        return (
          <SolutionsSubMenu
            setSelectedMenu={setSelectedMenu}
          />
        );
      default:
        return null;
    }
  };

   const ref = useClickOutside(() => {
     setSelectedMenu(null);
   });

  return (
    <>
      {MenuItems.map((item) => (
        <nav
          key={item.label}
          className={cn(`hidden sm:flex items-center gap-2`)}
        >
          {item.hasSubMenu ? (
            <div
              key={item.label}
              className="flex items-center gap-x-1 cursor-pointer relative"
              onClick={() => handleMenuClick(item)}
            >
              {item.label}
              <ArrowDownIcon />
              {openSubMenu === item.label && (
                renderSubMenuItems(item?.type)
              )}
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
    </>
  );
};

export default MenuComponent;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

export const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/products",
    name: "All Products",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[103px] shadow-sm   shadow-slate-300 bg-white z-[999999]">
      <div className="flex justify-center items-center w-full px-5 m-auto max-w-[1300px]">
        <div className="w-full flex justify-between items-center">
          <Image
            src="https://djaje.com/wp-content/uploads/2021/11/cropped-logoo-2-155x52.png"
            alt="Djaje Logo"
            width={155}
            height={52}
          />
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiOutlineX size={40} color="#54B435" />
          ) : (
            <HiMenuAlt1 size={40} color="#54B435" />
          )}
        </div>

        <ul
          className={`flex flex-col justify-start items-start gap-5 p-10 bg-[#f0f0f0] left-0 right-0 absolute z-10 text-black md:flex md:flex-row md:justify-end md:items-center md:z-auto md:gap-5 md:p-0 md:static md:bg-white md:w-full
          ${isOpen ? "top-[104px]" : "top-[-999999px]"}`}
        >
          {navLinks.map((link, index) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                key={index}
                className={
                  isActive
                    ? "text-green-500"
                    : "text-[#333333]" + " text-base hover:text-gray-500"
                }
                href={link.href}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./Card";
import { BsBag } from "react-icons/bs";

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
  return (
    <nav className="flex justify-between items-center h-[103px] shadow-sm shadow-slate-300">
      <Card>
        <div>
          <Image
            src="https://djaje.com/wp-content/uploads/2021/11/cropped-logoo-2-155x52.png"
            alt="Djaje Logo"
            width={155}
            height={52}
          />
        </div>
        <div className="flex gap-10">
          <ul className="flex gap-10">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <BsBag size={25} />
          </div>
        </div>
      </Card>
    </nav>
  );
};

export default Navbar;

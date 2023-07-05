import React from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navbar";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="h-[250px] bg-[#001524] flex justify-center items-center text-white">
        <Card>
          <div className="flex justify-between items-center w-full">
            <div>
              <Image
                src="https://djaje.com/wp-content/uploads/2021/11/cropped-logoo-2-155x52.png"
                alt="Djaje Logo"
                width={155}
                height={52}
              />
            </div>
            <div>
              <p className="text-2xl">Navigation</p>
              <ul className="mt-5 flex flex-col gap-2 text-lg">
                {navLinks.map((item, index) => (
                  <Link key={index} href={item.href} className="text-[#a8a8a8]">
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[50px] bg-[#001524] flex justify-center items-center text-white shadow-sm shadow-slate-300">
        <Card>
          <div className="flex justify-between items-center w-full text-lg">
            <p>Copyright &copy; 2023 | Djaje</p>
            <div className="flex justify-center items-center gap-5">
              <Link
                href="https://www.facebook.com/jajanbasahbali"
                target="_blank"
              >
                <BsFacebook size={20} />
              </Link>
              <Link href="http://instagram.com/djaje.id" target="_blank">
                <BsInstagram size={20} />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-[#001524] flex justify-center items-center text-white">
        <Card>
          <div className="flex justify-between w-full">
            <div>
              <Image
                src="https://djaje.com/wp-content/uploads/2021/11/cropped-logoo-2-155x52.png"
                alt="Djaje Logo"
                width={155}
                height={52}
              />
            </div>
            <div className="hidden md:block">
              <p className="text-lg font-bold">Navigation</p>
              <ul className="mt-5 flex flex-col gap-2 text-lg">
                <Link href="/" className="text-[#a8a8a8] text-base">
                  Home
                </Link>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className="py-5 bg-[#001524] flex justify-center items-center text-white shadow-sm shadow-slate-300">
        <Card>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-full text-lg">
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

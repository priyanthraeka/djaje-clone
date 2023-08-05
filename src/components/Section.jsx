import React from "react";
import Card from "./Card";
import { BsCart2, BsFillCartFill } from "react-icons/bs";
import Link from "next/link";

const Section = () => {
  return (
    <div className="h-[250px] bg-[#001524] flex justify-center items-center text-white">
      <Card>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-5 lg:gap-0">
          <p className="font-merriweather text-xl lg:text-3xl font-bold">
            Diskon 10% Pembelian Paket!
          </p>
          <Link
            href="/products"
            className="py-3 px-6 rounded-full text-white bg-green-500 w-fit flex justify-center items-center gap-2"
          >
            <span>
              <BsCart2 size={20} />
            </span>
            Cek Sekarang
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Section;

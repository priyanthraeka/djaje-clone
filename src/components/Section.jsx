import React from "react";
import Card from "./Card";
import { BsFillCartFill } from "react-icons/bs";

const Section = () => {
  return (
    <div className="h-[250px] bg-[#001524] flex justify-center items-center text-white">
      <Card>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-5 lg:gap-0">
          <p className="font-merriweather text-xl lg:text-3xl font-bold">
            Diskon 10% Pembelian Paket!
          </p>
          <button className="py-2 px-5 rounded-full text-white bg-green-500 w-fit flex justify-center items-center gap-2">
            <span>
              <BsFillCartFill size={18} />
            </span>
            Cek Sekarang
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Section;

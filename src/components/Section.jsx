import React from "react";
import Card from "./Card";
import { BsCart2, BsCash, BsRecycle, BsTruck } from "react-icons/bs";

const Section = () => {
  return (
    <div className="h-[250px] bg-[#001524] flex justify-center items-center text-white">
      <Card>
        <div className="flex justify-between items-center w-full">
          <p className="font-merriweather text-4xl">
            Diskon 10% Pembelian Paket!
          </p>
          <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit flex justify-center items-center gap-2">
            <span>
              <BsCart2 size={20} />
            </span>
            Cek Sekarang
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Section;

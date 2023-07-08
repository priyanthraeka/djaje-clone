import React from "react";
import Card from "./Card";
import { BsCash, BsRecycle, BsTruck } from "react-icons/bs";

const BlackSection = () => {
  return (
    <div className="bg-[#001524] flex justify-center items-center text-white py-10">
      <Card>
        <div className="flex w-full flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5">
          <div className="flex justify-start items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg w-[380px]">
            <div>
              <BsTruck size={50} className="text-[#54B435]" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base">Gratis Ongkir</p>
              <p className="text-base">Denpasar Only & 100+ pcs</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg w-[380px]">
            <div>
              <BsCash size={50} className="text-[#54B435]" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base">Berbagai Cara Bayar</p>
              <p className="text-base">Beragam metode pembayaran</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg w-[380px]">
            <div>
              <BsRecycle size={50} className="text-[#54B435]" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base">Bahan Berkualitas</p>
              <p className="text-base">Tanpa pengawet</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlackSection;

import React from "react";
import Card from "./Card";
import { BsCash, BsRecycle, BsTruck } from "react-icons/bs";

const BlackSection = () => {
  return (
    <div className="h-[250px] bg-[#001524] flex justify-center items-center text-white">
      <Card>
        <div className="flex justify-between items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg">
          <div>
            <BsTruck size={50} className="text-[#54B435]" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Gratis Ongkir</p>
            <p className="text-base">Denpasar Only & 100+ pcs</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg">
          <div>
            <BsCash size={50} className="text-[#54B435]" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Berbagai Cara Bayar</p>
            <p className="text-base">Beragam metode pembayaran</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 bg-[#8D8D8D47] p-7 rounded-lg">
          <div>
            <BsRecycle size={50} className="text-[#54B435]" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Bahan Berkualitas</p>
            <p className="text-base">Organik dan tanpa pengawet</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlackSection;

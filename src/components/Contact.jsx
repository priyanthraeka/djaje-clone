import React from "react";
import Card from "./Card";
import { BsEnvelope, BsFillTelephoneFill, BsPinMapFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-bold text-3xl font-merriweather leading-normal text-[#333333]">
          Kontak Kami
        </h1>
        <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="border border-slate-300 p-20 rounded-md w-[280px] flex flex-col justify-center items-center gap-2">
            <BsFillTelephoneFill size={25} color="#54B435" />
            <p className="text-base">081339820736</p>
          </div>
          <div className="border border-slate-300 p-20 rounded-md w-[280px] flex flex-col justify-center items-center gap-2">
            <BsEnvelope size={25} color="#54B435" />
            <p className="text-base">djajebali@gmail.com</p>
          </div>
          <div className="border border-slate-300 p-20 rounded-md w-[280px] flex flex-col justify-center items-center gap-2">
            <BsPinMapFill size={25} color="#54B435" />
            <p className="text-base">Denpasar, Bali</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contact;

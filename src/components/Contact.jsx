import React from "react";
import Card from "./Card";
import { BsEnvelope, BsFillTelephoneFill, BsPinMapFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center py-28 w-full">
        <p className="font-bold text-5xl font-merriweather leading-normal text-[#333333]">
          Kontak Kami
        </p>
        <div className="mt-20 flex justify-center items-center gap-10">
          <div className="border border-slate-300 p-20 rounded-md flex flex-col justify-center items-center gap-2">
            <BsFillTelephoneFill size={25} color="#54B435" />
            <p>081339820736</p>
          </div>
          <div className="border border-slate-300 p-20 rounded-md flex flex-col justify-center items-center gap-2">
            <BsEnvelope size={25} color="#54B435" />
            <p>djajebali@gmail.com</p>
          </div>
          <div className="border border-slate-300 p-20 rounded-md flex flex-col justify-center items-center gap-2">
            <BsPinMapFill size={25} color="#54B435" />
            <p>Denpasar, Bali</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contact;

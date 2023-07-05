import React from "react";
import Card from "./Card";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";

const BestSeller = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Card>
        <div className="flex justify-around items-center w-full">
          <div className="w-[500px]">
            <p className="font-bold text-lg font-merriweather">Kue Basah</p>
            <p className="text-base font-merriweather">
              Berbagai pilihan kue basah terenak di Denpasar
            </p>
            <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit mt-5 flex justify-center items-center gap-2">
              <span>
                <BsCart2 size={20} />
              </span>
              Cek Sekarang
            </button>
          </div>
          <div className="w-[500px]">
            <p className="font-bold text-lg font-merriweather">Kue Kering</p>
            <p className="text-base font-merriweather">
              Tersedia berbagai pilihan varian rasa kue kering.
            </p>
            <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit mt-5 flex justify-center items-center gap-2">
              <span>
                <BsCart2 size={20} />
              </span>
              Cek Sekarang
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BestSeller;

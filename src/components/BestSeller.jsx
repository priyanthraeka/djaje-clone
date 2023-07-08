import React from "react";
import Card from "./Card";
import { BsFillCartFill } from "react-icons/bs";

const BestSeller = () => {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-20">
          <div className="w-[500px] flex flex-col items-center justify-center">
            <p className="font-bold text-3xl font-merriweather">Kue Basah</p>
            <p className="text-base font-merriweather">
              Berbagai pilihan kue basah terenak di Denpasar
            </p>
            <button className="py-2 px-5 rounded-full text-white bg-green-500 w-fit mt-5 flex justify-center items-center gap-2">
              <span>
                <BsFillCartFill size={18} />
              </span>
              Cek Sekarang
            </button>
          </div>
          <div className="w-[500px] flex flex-col items-center justify-center">
            <p className="font-bold text-3xl font-merriweather">Kue Kering</p>
            <p className="text-base font-merriweather mt-2">
              Tersedia berbagai pilihan varian rasa kue kering.
            </p>
            <button className="py-2 px-5 rounded-full text-white bg-green-500 w-fit mt-5 flex justify-center items-center gap-2">
              <span>
                <BsFillCartFill size={18} />
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

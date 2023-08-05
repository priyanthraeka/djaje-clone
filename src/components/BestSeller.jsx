import React from "react";
import Card from "./Card";
import { BsCart2, BsFillCartFill } from "react-icons/bs";
import Link from "next/link";

const BestSeller = () => {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
          <div className="w-[500px] flex flex-col items-center justify-center">
            <p className="font-bold text-3xl font-merriweather">Kue Basah</p>
            <p className="text-base font-merriweather">
              Berbagai pilihan kue basah terenak di Denpasar
            </p>
            <Link
              href="/products"
              className="py-3 px-6 rounded-full text-white bg-green-500 w-fit my-5 flex justify-center items-center gap-2 m-auto "
            >
              <span>
                <BsCart2 size={20} />
              </span>
              Cek Sekarang
            </Link>
          </div>
          <div className="w-[500px] flex flex-col items-center justify-center">
            <p className="font-bold text-3xl font-merriweather">Kue Kering</p>
            <p className="text-base font-merriweather mt-2">
              Tersedia berbagai pilihan varian rasa kue kering.
            </p>
            <Link
              href="/products"
              className="py-3 px-6 rounded-full text-white bg-green-500 w-fit my-5 flex justify-center items-center gap-2 m-auto "
            >
              <span>
                <BsCart2 size={20} />
              </span>
              Cek Sekarang
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BestSeller;

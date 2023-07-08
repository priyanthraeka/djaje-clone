import React from "react";
import Card from "./Card";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Home = () => {
  return (
    <Card>
      <div className="grid grid-rows-2 flex-wrap-reverse md:grid-cols-2 md:grid-rows-none justify-between items-center w-full">
        <div className="flex justify-center items-center order-2 md:order-1">
          <Image
            src="https://djaje.com/wp-content/uploads/2021/11/IMG_1756-removebg-preview.png"
            alt="Dadar Gulung"
            width={666}
            height={375}
          />
        </div>
        <div className="flex flex-col md:items-start gap-4 order-1 md:order-2">
          <p className="font-bold text-lg text-[#333333] font-merriweather flex flex-col justify-center items-center md:items-start md:text-start">
            <span className="mb-5 flex">
              <Image
                src="https://djaje.com/wp-content/uploads/2019/07/logo-leaf-new.png"
                alt="Leaf Image"
                width={95}
                height={38}
              />
            </span>
            Kualitas Produk Terbaik
          </p>
          <h1 className="font-bold text-3xl lg:text-5xl font-merriweather lg:leading-normal text-[#333333] text-center md:text-start">
            Aneka Kue Basah dan Kue Kering di Bali
          </h1>
          <p className="flex justify-center items-center text-base text-center md:text-start">
            Di Djaje kami memberikan kue yang sehat dan berkualitas. Djaje
            membuat kue menggunakan bahan-bahan alami dan sehat tanpa perlu
            khawatir dengan bahan pengawet.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit my-10 flex justify-center items-center gap-2 m-auto ">
              <span>
                <BsCart2 size={20} />
              </span>
              Cek Sekarang
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;

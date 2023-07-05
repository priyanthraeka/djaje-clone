import React from "react";
import Card from "./Card";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Home = () => {
  return (
    <Card>
      <div className="grid grid-cols-2 justify-between items-center w-full h-[650px]">
        <div>
          <Image
            src="https://djaje.com/wp-content/uploads/2021/11/IMG_1756-removebg-preview.png"
            alt="Dadar Gulung"
            width={666}
            height={375}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg text-[#333333] font-merriweather">
            <span className="mb-5 block">
              <Image
                src="https://djaje.com/wp-content/uploads/2019/07/logo-leaf-new.png"
                alt="Leaf Image"
                width={75}
                height={33}
              />
            </span>
            Kualitas Produk Terbaik
          </p>
          <p className="font-bold text-5xl font-merriweather leading-normal text-[#333333]">
            Aneka Kue Basah dan Kue Kering di Bali
          </p>
          <p>
            Di Djaje kami memberikan kue yang sehat dan berkualitas. Djaje
            membuat kue menggunakan bahan-bahan alami dan sehat tanpa perlu
            khawatir dengan bahan pengawet.
          </p>
          <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit mt-20 flex justify-center items-center gap-2">
            <span>
              <BsCart2 size={20} />
            </span>
            Cek Sekarang
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Home;

import React from "react";
import Card from "./Card";
import Image from "next/image";

const About = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center py-20 w-full">
        <p className="font-bold text-5xl font-merriweather leading-normal text-[#333333]">
          Tentang Kami
        </p>
        <div className="grid grid-cols-2 justify-center items-start mt-20 gap-10">
          <div className="flex flex-col gap-10 text-justify">
            <p className="text-lg">
              <span className="me-2 font-merriweather text-5xl">D</span>
              jaje telah dibangun sejak pertengahan 2015. Proses pembuatan kue
              tradisional telah melalui banyak uji coba hingga kini memiliki
              cita rasa yang khas tersendiri. Produk unggulan saat ini yaitu Kue
              Dadar Gulung dan Lapis. Kami memilih menggunakan bahan-bahan yang
              berkualitas serta segar untuk memberikan cita rasa terbaik.
            </p>
            <p className="text-lg">
              Saat awal berdiri kami hanya menitipkan kue ke pasar, namun hingga
              sekarang telah bekerjasama dengan lebih dari 10 toko kue di
              Denpasar. Dalam sebulan ribuan kue telah dipesan untuk berbagai
              acara.
            </p>
          </div>
          <Image
            src="https://djaje.com/wp-content/uploads/2021/11/About.png"
            alt="Dadar Gulung"
            width={800}
            height={800}
          />
        </div>
      </div>
    </Card>
  );
};

export default About;

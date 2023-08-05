import Image from "next/image";
import Card from "./Card";

const Testimony = () => {
  return (
    <div className="my-10">
      <Card>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-xl lg:text-3xl font-bold font-merriweather text-[#333333]">
            Pesan Kue Aman, Mudah, Cepat!
          </p>
          <div className="mt-10 flex flex-col gap-5 justify-center items-center">
            <p className="text-3xl lg:text-5xl font-bold font-merriweather text-[#333333]">
              Testimoni
            </p>
            <span>
              <Image
                src="https://djaje.com/wp-content/uploads/2019/07/logo-leaf-new.png"
                alt="Leaf Image"
                width={95}
                height={38}
              />
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full mt-20 gap-10 lg:gap-0">
            <div className="flex flex-col justify-center items-center max-w-[500px]">
              <p className="text-lg font-bold font-merriweather">
                Dewa Sanjaya
              </p>
              <p className="text-base text-center font-merriweather mt-3 mb-3">
                &quot;Kue basahnya enak kak, bakal sering order disini.&quot;
              </p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[500px]">
              <p className="text-lg font-bold font-merriweather">
                Khrisna Yoga
              </p>
              <p className="text-base text-center font-merriweather mt-3 mb-3">
                &quot;Mantul jajannya uenakk&quot;
              </p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Testimony;

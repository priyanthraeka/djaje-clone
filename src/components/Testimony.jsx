import Image from "next/image";
import Card from "./Card";

const Testimony = () => {
  return (
    <div className="h-[500px]">
      <Card>
        <div className="flex flex-col justify-center items-center  w-full">
          <p className="mt-10 text-3xl font-bold font-merriweather text-[#333333]">
            Pesan Kue Aman, Mudah, Cepat!
          </p>
          <div className="mt-10 flex flex-col gap-5 justify-center items-center">
            <p className="text-5xl font-bold font-merriweather text-[#333333]">
              Testimoni
            </p>
            <div>
              <Image
                src="https://djaje.com/wp-content/uploads/2019/07/logo-leaf-new.png"
                alt="Leaf Image"
                width={75}
                height={33}
              />
            </div>
          </div>
          <div className="flex justify-around items-center w-full mt-20 ">
            <div className="flex flex-col justify-center items-center max-w-[500px]">
              <p className="text-xl font-bold font-merriweather">John Doe</p>
              <p className="text-lg text-center font-merriweather mt-5">
                &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate in voluptate architecto dicta?&quot;
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
                className="mt-2"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[500px]">
              <p className="text-xl font-bold font-merriweather">Jane Doe</p>
              <p className="text-lg text-center font-merriweather mt-5">
                &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate in voluptate architecto dicta?&quot;
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
                className="mt-2"
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

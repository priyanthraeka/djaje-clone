"use client";
import Card from "@/components/Card";
import { PRODUCTS } from "@/components/Products";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { formatToRupiah } from "@/components/Products";
import Link from "next/link";
import { useEffect, useState } from "react";

const DetailProduct = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://djaje-clone-default-rtdb.firebaseio.com/products.json"
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const sortedProducts = products.filter((item) => item.id === +props.id);
  console.log(sortedProducts);
  const getCategory = sortedProducts.map((item) => item.category);
  const relatedProducts = products.filter((item) => item.id !== +props.id);
  const sortedRelatedProducts = relatedProducts.filter((item) =>
    getCategory.includes(item.category)
  );

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledArr = shuffle(sortedRelatedProducts);
  const onlyShow = shuffledArr.slice(0, 4);

  return (
    <Card>
      <div className="flex flex-col gap-5 w-full">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none gap-10 w-full"
          >
            <Image
              src={product.image[0]}
              alt={product.name}
              width={500}
              height={500}
            />
            <div>
              <h1 className="text-3xl font-merriweather font-bold">
                {product.name}
              </h1>
              <p className="text-2xl mt-2">
                {"Rp. " + formatToRupiah(product.price)}
              </p>
              <p className="text-lg text-slate-600">
                {product.price.length === null &&
                  `Harga per pcs: ${product.each_price}`}
              </p>
              <div className="flex gap-2 mt-5">
                <input
                  type="number"
                  className="px-2 py-1 border border-black rounded-md w-28"
                  defaultValue={1}
                  min={1}
                />
                <button className="py-1 px-5 rounded-full text-white bg-green-500 w-fit flex justify-center items-center gap-2">
                  <span>
                    <BsCart2 size={20} />
                  </span>
                  Add to Cart
                </button>
              </div>
              <p className="text-base text-slate-500 mt-5">
                Category: {product.category}
              </p>
              <p className="text-xl font-bold mt-10">Deskripsi</p>
              <hr className="border border-slate-300 my-2" />
              <p className="text-base">{product.description}</p>
            </div>
          </div>
        ))}
        <div>
          <p className="text-2xl font-bold mb-5 font-merriweather">
            Related Products
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start items-start gap-5">
            {onlyShow.map((item) => (
              <Link
                href={"/products/" + item.id}
                key={item.id}
                className="max-w-[200px]"
              >
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <p className="text-sm text-slate-600 mt-1">{item.category}</p>
                <p className="text-base font-merriweather mt-2">{item.name}</p>
                <p className="text-base">
                  {"Rp. " + formatToRupiah(item.price)}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default DetailProduct;

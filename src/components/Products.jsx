import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

export function formatToRupiah(number) {
  let number_string = number.toString(),
    split = number_string.split("."),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  return (rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah);
}

export const PRODUCTS = [
  {
    id: 1,
    name: "Kue Lapis Original",
    image: ["https://djaje.com/wp-content/uploads/2021/11/Foto-Lapis-Web.png"],
    price: 50000,
    each_price: 2000,
    description: "",
    category: "Kue Basah",
  },
  {
    id: 2,
    name: "Lapis Gula Bali",
    image: [
      "https://djaje.com/wp-content/uploads/2021/12/Foto-Produk-Lapis-Gula-Bali.png",
    ],
    price: 75000,
    each_price: 3000,
    description: "",
    category: "Kue Basah",
  },
  {
    id: 3,
    name: "Celorot",
    image: [
      "https://djaje.com/wp-content/uploads/2022/02/Foto-Produk-Celorot.png",
    ],
    price: 62500,
    each_price: 2500,
    description: "",
    category: "Kue Basah",
  },
  {
    id: 4,
    name: "Kue Monde Susu Cokelat (500gr)",
    image: [
      "https://djaje.com/wp-content/uploads/2021/12/Foto-Produk-Monde-Coklat-Web.png",
    ],
    price: 35000,
    each_price: null,
    description: "Rasa Cokelat",
    category: "Kue Kering",
  },
  {
    id: 5,
    name: "Kue Monde Susu Cokelat (940gr)",
    image: [
      "https://djaje.com/wp-content/uploads/2021/12/Foto-Produk-Monde-Coklat-Web.png",
    ],
    price: 50000,
    each_price: null,
    description: "Rasa Cokelat",
    category: "Kue Kering",
  },
  {
    id: 6,
    name: "Kue Monde Susu Strawberry (940gr)",
    image: [
      "https://djaje.com/wp-content/uploads/2021/12/Foto-Produk-Monde-Strawberry-Web.png",
    ],
    price: 50000,
    each_price: null,
    description: "Rasa Strawberry",
    category: "Kue Kering",
  },
  {
    id: 7,
    name: "Kue Putu Ayu",
    image: [
      "https://djaje.com/wp-content/uploads/2022/02/Foto-Produk-Putu-Ayu.png",
    ],
    price: 50000,
    each_price: null,
    description: "",
    category: "Kue Basah",
  },
  {
    id: 8,
    name: "Dadar Gulung",
    image: ["https://djaje.com/wp-content/uploads/2021/11/Foto-Dadar-Web.png"],
    price: 50000,
    each_price: 2000,
    description: "",
    category: "Kue Basah",
  },
  {
    id: 9,
    name: "Sumping Pisang",
    image: [
      "https://djaje.com/wp-content/uploads/2022/02/Foto-Produk-Sumping-Pisang.png",
    ],
    price: 62500,
    each_price: 2500,
    description: "",
    category: "Kue Basah",
  },
];

const Products = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-3xl font-merriweather leading-normal text-[#333333]">
          Produk Kami
        </h1>
        <div className="mt-20">
          <ul className="flex flex-wrap justify-center items-start gap-5">
            {PRODUCTS.map((product) => (
              <Link href={"/products/" + product.id} key={product.id}>
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <p className="text-sm text-slate-600 mt-1">
                  {product.category}
                </p>
                <p className="text-base font-merriweather mt-2">
                  {product.name}
                </p>
                <p className="text-base">
                  {"Rp. " + formatToRupiah(product.price)}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Products;

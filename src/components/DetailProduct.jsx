import Card from "@/components/Card";
import { PRODUCTS } from "@/components/Products";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { formatToRupiah } from "@/components/Products";

const DetailProduct = (props) => {
  const sortedProducts = PRODUCTS.filter((item) => item.id === +props.id);
  console.log(sortedProducts);
  return (
    <Card>
      {sortedProducts.map((product) => (
        <div key={product.id} className="grid grid-cols-2 w-full">
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
            <p className="text-2xl">{"Rp. " + formatToRupiah(product.price)}</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="px-2 py-1 border border-black rounded-md w-"
                defaultValue={1}
                min={1}
              />
              <button className="py-3 px-6 rounded-full text-white bg-green-500 w-fit flex justify-center items-center gap-2">
                <span>
                  <BsCart2 size={20} />
                </span>
                Add to Cart
              </button>
            </div>
            <p>Category: {product.category}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default DetailProduct;

"use client";
import Image from "next/image";
import Card from "./Card";
import { PRODUCTS } from "./Products";
import { useState } from "react";

const CartModal = () => {
  const [inputQty, setInputQty] = useState(1);

  const onChangeHandler = (event) => {
    setInputQty(event.target.value);
    console.log(inputQty);
  };

  const getSubtotal = (item1, item2, index) => {
    if (index) {
      return item1 * item2;
    }
  };

  return (
    <Card>
      <div className="w-full">
        <h1 className="font-bold text-3xl font-merriweather leading-normal text-[#333333]">
          Cart
        </h1>
        {/* Table1 */}
        <table className="table-auto border border-black w-full">
          <thead>
            <tr>
              <th className="text-start"></th>
              <th className="text-start">Image</th>
              <th className="text-start">Product</th>
              <th className="text-start">Price</th>
              <th className="text-start">Qty</th>
              <th className="text-start">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <button>x button</button>
                </td>
                <td>
                  <Image
                    src={item.image[0]}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    className="px-2 py-1 border border-black rounded-md w-28"
                    defaultValue={1}
                    min={1}
                    onChange={onChangeHandler}
                  />
                </td>
                <td>{getSubtotal(item.price, inputQty)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Table2 */}
        <div className="flex justify-center items-center md:justify-end">
          <table className="mt-20 border border-slate-200 w-[500px]">
            <thead className="flex justify-start border-b border-slate-200 p-2">
              <tr>
                <th className="font-bold text-2xl font-merriweather leading-normal text-[#333333]">
                  Cart Totals
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="font-bold text-lg font-merriweather leading-normal text-[#333333] p-2 grid grid-cols-2">
                  <div>Subtotal</div>
                  <div>Rp. 100.000</div>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="font-bold text-lg font-merriweather leading-normal text-[#333333] p-2 grid grid-cols-2">
                  <div>Total</div>
                  <div>Rp. 100.000</div>
                </td>
              </tr>
              <tr>
                <td className="flex justify-center p-2">
                  <button className="py-2 px-5 rounded-full text-white bg-green-500 flex justify-center items-center gap-2 w-full">
                    Cek Sekarang
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default CartModal;

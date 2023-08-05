"use client";
import Card from "./Card";
import { PRODUCTS } from "./Products";
import CartItem from "./CartItem";

const CartModal = () => {
  return (
    <Card>
      <div className="w-full">
        <h1 className="font-bold text-3xl font-merriweather leading-normal text-[#333333]">
          Cart
        </h1>
        {/* Table1 */}
        <div className="overflow-x-auto">
          <table className="table-auto border border-slate-300 border-collapse w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  #
                </th>
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  Image
                </th>
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  Product
                </th>
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  Price
                </th>
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  Qty
                </th>
                <th className="px-6 py-3 text-start font-bold text-md leading-normal text-[#333333]">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((item, index) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* Table2 */}
        <div className="flex justify-center items-center md:justify-end mt-20">
          <table className="table-auto border border-slate-300 border-collapse w-[500px]">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="flex px-6 py-3 font-merriweather font-bold text-xl">
                  Cart Totals
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-300">
                <td className="grid grid-cols-2 px-6 py-3 font-bold text-lg">
                  <div>Subtotal</div>
                  <div>Rp. 100.000</div>
                </td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="grid grid-cols-2 px-6 py-3 font-bold text-lg">
                  <div>Total</div>
                  <div>Rp. 100.000</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <button className="py-2 px-5 rounded-full text-white bg-[#8BC34A] flex justify-center items-center gap-2 w-full">
                    Proceed to checkout
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

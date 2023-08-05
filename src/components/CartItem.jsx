import Image from "next/image";
import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import useFormatToRupiah from "@/hooks/useFormatToRupiah";

const CartItem = (props) => {
  const { image, name, price } = props;

  const [inputQty, setInputQty] = useState(1);

  const onClickHandler = () => {
    setInputQty(0);
  };

  const onChangeHandler = (event) => {
    setInputQty(event.target.value);
  };

  const subtotalHandler = (price, qty) => {
    return +price * +qty;
  };

  return (
    <tr className="border-b border-slate-300">
      <td className="px-6 py-4">
        <button onClick={onClickHandler}>
          <BsXCircle size={27} color="#CBD5E1" />
        </button>
      </td>
      <td className="px-6 py-4">
        <Image src={image[0]} alt={name} width={120} height={120} />
      </td>
      <td className="px-6 py-4 text-md">{name}</td>
      <td className="px-6 py-4 text-md">{useFormatToRupiah(price)}</td>
      <td className="px-6 py-4">
        <input
          type="number"
          className="px-2 py-1 border border-slate-300 rounded-md w-20"
          defaultValue={1}
          min={1}
          onChange={onChangeHandler}
        />
      </td>
      <td className="px-6 py-4">
        {useFormatToRupiah(subtotalHandler(price, inputQty))}
      </td>
    </tr>
  );
};

export default CartItem;

import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CartCard = ({ item, Delete }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex justify-between items-center bg-blue-50 m-3 p-4 rounded-md">
      <div className="cart-wrapper flex gap-10">
        <img width={"7%"} src={item.image} alt="" />
        <div>
          <div className="info-wrapper flex gap-10">
            <p>{item.title}</p>
            <p>
              {item.price > 1000 ? "₹" : "$"}
              {item.price * count}
            </p>
          </div>
          <div className="m-1 mt-2">
            <button
              className="bg-black rounded-full text-white text-xl px-1 mx-2"
              onClick={() => setCount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="text-xl">{count}</span>
            <button
              className="bg-black rounded-full text-white text-xl px-1 mx-2"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div onClick={() => Delete(item.id)}>
        <RxCross1 size={"25px"} />
      </div>
    </div>
  );
};

export default CartCard;

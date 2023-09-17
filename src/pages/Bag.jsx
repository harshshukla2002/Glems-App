import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../components/CartCard";
import { notification } from "antd";
import "../css/Cart.css";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const [cart, setCart] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth") || false;

  const PriceCount = () => {
    let temp = 0;

    cart.forEach((item) => {
      temp += item.price;
    });

    setPrice(parseInt(temp));
  };

  const getCartData = async () => {
    try {
      const res = await axios.get(
        "https://dull-erin-buffalo-vest.cyclic.cloud/cart"
      );
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message,
    });
  };

  const Delete = (id) => {
    axios
      .delete(`https://dull-erin-buffalo-vest.cyclic.cloud/cart/${id}`)
      .then(() => {
        openNotificationWithIcon("success", "Deleted");
        getCartData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    PriceCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div>
      {contextHolder}
      {cart.length > 0 ? (
        <div className="w-4/5 m-auto my-5">
          {cart?.map((item) => {
            return <CartCard item={item} Delete={Delete} />;
          })}
        </div>
      ) : (
        <></>
      )}
      <div className="bg-gray-300 p-4">
        <p>Total: {price}</p>
        <button
          className="bg-green-500 text-white p-4 m-3 rounded-md"
          onClick={() => {
            auth
              ? navigate("/checkout")
              : openNotificationWithIcon("error", "please Login first");
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Bag;

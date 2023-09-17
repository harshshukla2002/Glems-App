import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/SinglePage.css";
import { BiCartAlt } from "react-icons/bi";
import { notification } from "antd";

const WatchesSinglepage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Added To Cart",
    });
  };

  const AddToCart = () => {
    axios
      .post("https://dull-erin-buffalo-vest.cyclic.cloud/cart", product)
      .then(() => {
        openNotificationWithIcon("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetData = async () => {
    try {
      const res = await axios.get(
        `https://dull-erin-buffalo-vest.cyclic.cloud/watches/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    product && (
      <>
        {contextHolder}
        <div className="single-wrapper w-3/5 m-auto text-center">
          <div className="m-10">
            <img
              width={"30%"}
              m="auto"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div>
            <Heading size={"lg"} m="3">
              {product.title}
            </Heading>
            <p className="mx-10">{product.description}</p>
          </div>
          <div className="my-5">
            <Heading size={"lg"} color={"orange"} m="10px">
              Product Details
            </Heading>
            <div className="mx-10">
              <p>Brand: {product.brand}</p>
              <p>Gender: {product.gender}</p>
              <p>Category: {product.category}</p>
              <p>
                $ {product.price} <sub>{product.discount}%</sub>
              </p>
            </div>
          </div>
          <button
            className="flex items-center justify-center gap-2 text-2xl bg-green-500 py-4 px-10 rounded m-10 text-white"
            onClick={AddToCart}
          >
            Add To Cart
            <BiCartAlt size={"22px"} />
          </button>
        </div>
      </>
    )
  );
};

export default WatchesSinglepage;

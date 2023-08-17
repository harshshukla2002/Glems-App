import React from "react";
import "../css/ProductCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-4 border-2 border-gray-400 rounded hvr-shrink hover:text-teal-600 cursor-pointer"
      onClick={() =>
        product.category === "Rings" ||
        product.category === "Bracelets" ||
        product.category === "Necklaces" ||
        product.category === "Earrings"
          ? navigate(`/jwelery/${product.id}`)
          : navigate(`/watches/${product.id}`)
      }
    >
      <img width={"60%"} className="m-auto mb-4" src={product.image} alt="" />
      <div className="m-2">
        <h1 className="cursor-pointer font-bold">{product.brand}</h1>
        <p>{product.title}</p>
        <div className="border-b-2 border-black"></div>
        <div className="flex justify-between p-2">
          <p>₹ {product.price}</p>
          <p>
            <AiOutlineShoppingCart className="cursor-pointer" size={"25px"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

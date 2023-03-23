import React from "react";
import { useDispatch } from "react-redux";
import "./CartButtons.css";
import { addToCart } from "../../../redux/cart";


const BeforeCart = ({ product }) => {
   

   return (
      <div className="before-cart">
         <button className="add-cart-button" onClick={() => addToCart(product)}>
            Add to cart
         </button>
      </div>
   );
};

export default BeforeCart;

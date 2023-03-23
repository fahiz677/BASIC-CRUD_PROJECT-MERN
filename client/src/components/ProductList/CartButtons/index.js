import React, { useContext, useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from 'react-redux';

const CartButtons = () => {
  const cartCount =0;
  const product = useSelector(state => state.products.products)
   // const cartCount = useMemo(() => {
   //    return cartList?.find((item) => item?.id === product?.id)?.count;
   // }, [cartList, product?.id]);

   return (
      <>
         {cartCount > 0 ? (
            <AfterCart productID={product?.id} cartCount={cartCount} />
         ) : (
            <BeforeCart product={product} />
         )}
      </>
   );
};

export default CartButtons;

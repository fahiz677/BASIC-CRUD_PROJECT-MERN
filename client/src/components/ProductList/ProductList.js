import React,{useEffect} from "react";
import { fetchProducts , reset} from "../../features/products/productSlice";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import { useSelector , useDispatch } from "react-redux";
import "./ProductList.css";
import CartButtons from "./CartButtons";

const ProductList = () => {
   // const cartList  = useSelector((state) => state.products);
   const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    return () => {
     reset();
    }
  }, [])
  
   return (
      <section className="container">
         {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.thumbnail} alt="" />
               <h3>{product?.title}</h3>
               <CartButtons product={product} />
            </div>
         ))}
      </section>
   );
};

export default ProductList;

import axios from "axios";

const url = 'http://localhost:4000/products';

export const fetchProducts = async() => {
 const {data} =  await axios.get(url);
 return data;
}

const prductsService = {
    fetchProducts
  }


export default prductsService;
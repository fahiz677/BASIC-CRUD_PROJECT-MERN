
import { redisClient } from "../controllers/products.js"
export const productCacheCheck = async( req , res , next ) => {
try{
  const products = await redisClient.GET('products')
  console.log("dfhjfhj",products)
  if(products){
      res.json(JSON.stringify(products))
  }else{
    next()
  }
}catch(err){
    console.log(err)
}
}
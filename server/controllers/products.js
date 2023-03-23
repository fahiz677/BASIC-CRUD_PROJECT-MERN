import express from 'express';
import mongoose from 'mongoose';
// import Redis from 'redis';

import Products from '../models/products.js';
// import { connection } from '../models/redis.js';


const router = express.Router();
// export const redisClient = await connection().redisConnect()
// const DEFAULT_EXPIRATION = 3600 ;

export const getPosts = async (req, res) => { 

    try {
        const products = await Products.find();
        
//        await redisClient.setEx('products',DEFAULT_EXPIRATION,json.stringify(products));
// console.log("not cached");
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}






export default router;
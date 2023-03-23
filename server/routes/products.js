import express from 'express';

import { getPosts } from '../controllers/products.js';

const router = express.Router();
// import { productCacheCheck } from '../middleware/cache.js';


router.get('/', getPosts);

export default router;
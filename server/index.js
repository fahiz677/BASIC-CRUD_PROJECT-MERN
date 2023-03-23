import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotnev from 'dotenv'


import postRoutes from './routes/products.js';
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";

const app = express();

dotnev.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', postRoutes);
app.use("/user", userRouter);
app.use("/admin", adminRouter);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
  
  mongoose.set()
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/products/productSlice";
import authReducer from "../features/auth/authSlice";
import adminReducer from "../features/admin/adminSlice";




export const store = configureStore({
  reducer: {
   products : productsReducer,
   auth : authReducer,
   admin : adminReducer,
  },
})

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import  productServices from "./productServices";


const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

   // Get user products
 export const fetchProducts = createAsyncThunk(
    'posts/fetchProducts',
    async (_, thunkAPI) => {
      try {
        const  data  =await productServices.fetchProducts()
        return  data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )


  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        })
        
    },
  })


export const selectAllPosts = (state) => state.products.products;


export const { reset } = productSlice.actions;

export default productSlice.reducer;

  

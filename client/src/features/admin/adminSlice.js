import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import  productServices from "./adminService";


const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

   // Get user products
 export const fetchUsersList = createAsyncThunk(
    'admin/fetchUsersList',
    async (_, thunkAPI) => {
      try {
        const  data  = await productServices.fetchUsersList()

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


  export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchUsersList.pending, (state) => {
        state.isLoading = true
        })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        })
        
    },
  })


export const selectAllPosts = (state) => state.usersList.usersList;


export const { reset } = adminSlice.actions;

export default adminSlice.reducer;

  

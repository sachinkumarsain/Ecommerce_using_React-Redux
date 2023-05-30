import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("FatchEcommerceData", async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
    return response.data;
})
export const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState: {
        cart:[],
        products: [],
        isLodings: false,
        isError: false
    },
    reducers: {
        setCart:(state,action)=>{
            state.cart=[...state.cart,action.payload]
        }
    
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.isLodings = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLodings=false;
            state.products = action.payload;

        }
        // [fetchData.rejected]:(state,action)=>{
        //     state.isError=true
        // }
    }
})
export const {setCart}=ecommerceSlice.actions
export default ecommerceSlice.reducer
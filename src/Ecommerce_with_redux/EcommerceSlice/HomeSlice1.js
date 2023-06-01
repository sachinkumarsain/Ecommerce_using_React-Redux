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
        cart:localStorage.getItem("product")===null?[]:JSON.parse(localStorage.getItem("product")),
        products: [],
        isLodings: false,
        isError: false,
        singFormChange:false
    },
    reducers: {
        setCart:(state,action)=>{
            state.cart=[...state.cart,action.payload]
            console.log(state.cart)
        },
        setDeleteCart:(state,action)=>{
            if(state.cart.id!==action.payload){
                    
                }
        },
        setChangeForm:(state,action)=>{
            if(state.singFormChange===false){
                  state.singFormChange=true
            }
            else{
                state.singFormChange=false
            }
            console.log(state.singFormChange)
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
export const {setCart,setDeleteCart,setChangeForm}=ecommerceSlice.actions
export default ecommerceSlice.reducer
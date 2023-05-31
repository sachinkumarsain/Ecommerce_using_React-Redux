import { configureStore } from "@reduxjs/toolkit";
import  ecommerceSliceReducer from "./EcommerceSlice/HomeSlice1";
 export default configureStore({
    reducer:{
      ecommerce:ecommerceSliceReducer
    }
 })
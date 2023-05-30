import { configureStore } from "@reduxjs/toolkit";
import  ecommerceSliceReducer from "./EcommerceSlice/Slice1";
 export default configureStore({
    reducer:{
      ecommerce:ecommerceSliceReducer
    }
 })
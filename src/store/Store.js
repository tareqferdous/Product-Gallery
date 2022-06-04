import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../store/ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

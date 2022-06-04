import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  return fetch(
    `https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product`
  ).then((res) => res.json());
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;

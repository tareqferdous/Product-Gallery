import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
  skues: [],
  color: null,
  size: null,
  image: [],
  selectedSizeId: null,
  selectedColorId: null,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  return fetch(
    `https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product`
  ).then((res) => res.json());
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addColor: (state, { payload }) => {
      state.skues[0] = payload.id;
      state.color = payload.name;
      state.image = payload;
      state.selectedColorId = payload.id;
    },
    addSize: (state, { payload }) => {
      state.skues[1] = payload.id;
      console.log(payload.id);
      state.size = payload.name;
      state.selectedSizeId = payload.id;
    },
  },
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

export const { addColor, addSize } = productSlice.actions;
export default productSlice.reducer;

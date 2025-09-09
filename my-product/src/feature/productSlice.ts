import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { productType } from "../utils/type";

const initialState: productType[] = [];

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct: productType = {
        id: nanoid().toString(),
        ...action.payload,
      };
      state.push(newProduct);
    },

    updateProduct: (state, action) => {
      //   const index = state.findIndex((p) => p.id === action.payload.id);
      //   if (index !== -1) state[index] = action.payload;

      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;

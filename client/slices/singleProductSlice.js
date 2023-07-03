import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("singleProduct", async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    return data;
  } catch (err) {
    next(err);
  }
});

export const editProduct = createAsyncThunk(
  "editSingleProduct",
  async ({ name, description, category, inventory, imageUrl, price }) => {
    const { data } = await axios.put(
      `http://localhost:3000/api/products/${id}`,
      {
        name,
        description,
        category,
        inventory,
        imageUrl,
        price,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectSingleProduct = (state) => state.singleProduct;
export default singleProductSlice.reducer;

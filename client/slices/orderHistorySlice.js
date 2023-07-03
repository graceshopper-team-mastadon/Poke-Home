import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderHistory = createAsyncThunk("orderHistory", async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/order/order-history"
  );
  return data;
});

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    orders: [],
    singleOrder: {},
    productsInSingleOrder: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderHistory.fulfilled, (state, { payload }) => {
      state.orders = payload;
    });
  },
});

export const orderHistoryState = (state) => state.orderHistory;
export default orderHistorySlice.reducer;

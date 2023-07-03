import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name: 'auth',
    initialState: false,
reducers: {
authTrue(state) {
    return true
},
authFalse(state) {
    return false
}
}
})
export const { authFalse, authTrue } = authSlice.actions;
export default authSlice.reducer
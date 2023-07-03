import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addFeedback = createAsyncThunk('addFeedback', async ({ name, feedback }) => {
    try {
        const { data } = await axios.post('/api/feedback', {
            name, feedback
        });
        return data;
    } catch (err) {
        next(err)
    }
}
)

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addFeedback.fulfilled, (state, { payload }) => {
            return payload;
        })
    }
})

export const selectFeedback = (state) => state.feedback;
export default feedbackSlice.reducer
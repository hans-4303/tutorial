import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    num: 0
};

const numSlice = createSlice({
    name: "num",
    initialState,
    reducers: {
        increase(state, action) {
            state.num = state.num + 1
        },
        decrease(state, action) {
            state.num = state.num - 1
        },
        deleteNum(state, action) {
            state.num = null
        }
    }
});

export const numActions = numSlice.actions;
export default numSlice.reducer;
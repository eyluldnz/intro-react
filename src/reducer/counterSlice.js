import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =createSlice({
    name:'counter',
    initialState:{
        value:1
    },
    reducers:{},
});
export default counterSlice.reducer;
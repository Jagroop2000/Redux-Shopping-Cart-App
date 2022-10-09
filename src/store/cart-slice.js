import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name : "cart",
    initialState :{ cartItems : 0},
    reducers :{
        increment(state){ state.cartItems++}
    }
})

export const cartActions = cartSlice.actions

export default cartSlice;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addCart(state, action) {
      state.items.push(action.payload)
    },
    removeCart(state) {
      state.items.length = 0
    }
  }
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer
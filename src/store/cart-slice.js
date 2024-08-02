import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalAmount: 0,
    items: [],
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalAmount = action.payload.totalAmount;

      console.log(action.payload);
      state.items = action.payload.items;
    },
    addItemToCart: (state, action) => {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalAmount++;
      }
    },
    removeItemFromCart: (state, action) => {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { addItemToCart, removeItemFromCart, showCart, replaceData } =
  cartSlice.actions;
export default cartSlice.reducer;

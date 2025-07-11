// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cada item será { id, title, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Agrega el producto al carrito o aumenta su cantidad
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // Elimina un producto del carrito
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Vacía el carrito por completo
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// ✅ Selector para contar el total de ítems en el carrito
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

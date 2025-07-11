// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // importamos el reducer del carrito

// Creamos el store de Redux con el slice del carrito
const store = configureStore({
  reducer: {
    cart: cartReducer, // registramos el slice bajo la key 'cart'
  },
});

export default store;

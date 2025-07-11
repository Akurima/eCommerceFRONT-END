// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Estado inicial del carrito
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

    // Elimina un producto del carrito por su ID
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Vacía todo el carrito
    clearCart(state) {
      state.items = [];
    },
  },
});

// Exportamos las acciones para usarlas en los componentes
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Exportamos el reducer para combinar en el store
export default cartSlice.reducer;

//////////////////////////////
// 📦 SELECTORES DEL CARRITO
//////////////////////////////

// ✅ Selector: total de ítems en el carrito (suma cantidades)
// Maneja el caso en que state.cart o items aún no estén definidos
export const selectCartItemCount = (state) =>
  state.cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

// ✅ Selector: lista completa de productos en el carrito
// Devuelve [] si no hay items cargados
export const selectCartItems = (state) => state.cart?.items || [];

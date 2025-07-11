import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/redux/authSlice"; // Asegúrate de que la ruta sea correcta

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

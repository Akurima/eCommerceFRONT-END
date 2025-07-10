import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/axiosInstance"; // 🧩 para peticiones con token

// Thunk para hacer login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/tokens/login",
        credentials
      );
      return response.data; // { token, user }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 🆕 Thunk para obtener datos del usuario logueado usando token
export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/users/me");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Leer desde localStorage si hay algo guardado
const tokenFromStorage = localStorage.getItem("token");
const userFromStorage = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: tokenFromStorage || null,
    user: userFromStorage ? JSON.parse(userFromStorage) : null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔄 loginUser
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Error al iniciar sesión";
      })

      // 🆕 getUserProfile
      .addCase(getUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.error || "Error al obtener perfil de usuario";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

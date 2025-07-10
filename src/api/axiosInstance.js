import axios from "axios";
import store from "../redux/store"; // para acceder al dispatch
import { logout } from "../redux/authSlice";

const API_BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Agrega el token automáticamente si existe
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🛑 Intercepta errores 401 y desloguea
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // Token inválido o vencido → cerramos sesión
      store.dispatch(logout());
      // (opcional) podemos también forzar navegación
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

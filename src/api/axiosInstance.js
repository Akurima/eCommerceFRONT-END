// src/api/axiosInstance.js
import axios from "axios";

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

// Intercepta errores 401 y redirige (sin usar Redux)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // Limpiamos manualmente el localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirigimos al login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

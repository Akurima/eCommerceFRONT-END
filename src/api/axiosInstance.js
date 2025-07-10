import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // cambialo si cambia el puerto

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Agregar el token a cada request si existe
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

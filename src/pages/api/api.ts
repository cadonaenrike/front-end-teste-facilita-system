import axios from "axios";

const baseURL = "http://localhost:3000/";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});

export default api;

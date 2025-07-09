import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-portofolio-backend-fishing-production.up.railway.app/api",
  withCredentials: true,  
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;

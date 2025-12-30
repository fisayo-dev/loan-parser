// lib/axios.ts
import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  timeout: 60000, // 60 seconds for potentially long AI processing
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed later
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle common errors
//     if (error.response) {
//       // Server responded with error status
//       const message = error.response.data?.message || error.response.statusText;
//       console.error("API Error:", message);
//     } else if (error.request) {
//       // Request made but no response
//       console.error("Network Error: No response from server");
//     } else {
//       // Something else happened
//       console.error("Error:", error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;

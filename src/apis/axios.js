//axiosInstance.js
import axios from "axios";

const baseConfig = {
  baseURL: "http://18.207.139.241:8080",
  headers: {
    "Content-Type": "application/json",
  },
};

const authConfig = {
  baseURL: "http://18.207.139.241:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

// 기본적으로 사용되는 axios instance

export const axiosInstance = axios.create(baseConfig);
export const authAxiosInstance = axios.create(authConfig);

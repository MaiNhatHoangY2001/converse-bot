import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  response => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      response.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      window.location.href = "/auth/login";
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;

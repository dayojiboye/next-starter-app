// import { makeStore } from "@/store/store";
import axios from "axios";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";

export const httpSignal = axios.CancelToken.source();
const CancelToken = axios.CancelToken;
let requestSignal;

const API = axios.create({
  baseURL: "",
});

// Modify as needed
API.interceptors.request.use(
  (config) => {
    const accessToken = ""; // Get accessToken from cookies
    accessToken && (config.headers["Authorization"] = "Bearer " + accessToken);
    requestSignal = CancelToken.source();
    config.cancelToken = requestSignal.token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Modify as needed
API.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    // const status = error.response.status;
    const { response } = error || {};
    const { status, data } = response || {};
    const originalRequest = error.config;
    const { baseURL, url } = originalRequest;
    const requestPATH = url.replace(baseURL, "");

    if (status === 401 && data.message.includes("Invalid authorization token.")) {
      // makeStore().dispatch(); // Delete session values from store
      toast.error("Your session has been invalidated. Please login again.", { id: "token-expired-error-toast" });
      setTimeout(() => {
        window.location.href = "/login";
      }, 400);
    }

    return Promise.reject(error);
  },
);

export { API, requestSignal };

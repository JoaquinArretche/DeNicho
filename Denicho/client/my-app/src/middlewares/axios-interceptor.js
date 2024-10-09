import axios from "axios";
import { getUserFromStorage } from "../utils/ localStorage.utility";

function createAxiosInstance() {
  const base_url = process.env.REACT_APP_BACK_END_URL;
  const instance = axios.create({
    baseURL: `${base_url}/api`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use((request) => {
    const { token } = getUserFromStorage();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error?.response?.data);
    }
  );
  return instance;
}

const customAxios = createAxiosInstance();
export default customAxios;

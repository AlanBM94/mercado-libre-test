import axios from "axios";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: "http://localhost:8080/api",
  });
};

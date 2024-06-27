import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

if (!baseURL) {
  throw new Error(
    "REACT_APP_API_BASE_URL no está definido en las variables de entorno."
  );
}

export const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";
import config from "../../config.js"

export const api = axios.create({
  baseURL: `${config.BACKEND_ENDPOINT}`,
  withCredentials: false,
});

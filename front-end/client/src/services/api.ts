import axios from "axios";
import config from "../../config.js"

// export const api = axios.create({
//   baseURL: "http://127.0.0.1:30530/api",
// });

// export const api = axios.create({
//     baseURL: "http://backend:30530/api",
//   });

export const api = axios.create({
  baseURL: `${config.BACKEND_ENDPOINT}`,
});
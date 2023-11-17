import axios from "axios";

export const api = axios.create({
  baseURL: "http://150.164.203.31:32173/api",
  withCredentials: false,
});

import io from "socket.io-client";
// import { BASE_URL } from "./constants";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createSocketConnection = () => {
  return io(BASE_URL, {
    withCredentials: true,
    path: "/api/socket.io", // If your backend is not using a custom path
  });
};

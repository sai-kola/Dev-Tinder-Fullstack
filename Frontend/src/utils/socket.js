import io from "socket.io-client";
// import { BASE_URL } from "./constants";
const BASE_URL = import.meta.env.VITE_BASE_URL

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL);
  } else {
    return io("/", { path: "/api/socket.io" });
  }
};
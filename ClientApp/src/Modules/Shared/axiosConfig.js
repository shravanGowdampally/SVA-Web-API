import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:44313/",
  withCredentials: true,
  headers: { crossorigin: true, "Access-Control-Allow-Origin": "*" },
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://apiURL",
  withCredentials: true,
  headers: { crossorigin: true, "Access-Control-Allow-Origin": "*" },
});

export default instance;

import axios from "axios";

const api = axios.create({
  baseURL: "https://apimongodb.barzdev.repl.co",
});

export default api;

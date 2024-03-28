import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.9.204:8999",
  timeout: 1000,
});

export default request;

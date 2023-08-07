import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    headers,
  });
  return instance;
};

export default http;

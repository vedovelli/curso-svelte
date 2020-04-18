import axios from "axios";

export const API_KEY = "a1279933de606b4374a2c93a1d0127a9";

export const http = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
});

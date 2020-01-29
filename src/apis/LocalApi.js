import axios from "axios";
import store from "./../store";

const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

LocalApi.interceptors.request.use(config => {
  const state = store.getState();

  const token = state.auth.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default LocalApi;

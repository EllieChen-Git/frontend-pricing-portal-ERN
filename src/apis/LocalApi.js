import axios from "axios";
import store from "./../store";

const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

LocalApi.interceptors.request.use(config => {
  const state = store.getState();
  return config;
});

export default LocalApi;

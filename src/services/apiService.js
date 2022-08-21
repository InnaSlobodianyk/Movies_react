import axios from "axios";
import { key } from "config";

export const sendRequest = async ({ url, method = "GET", payload }) => {
  return await axios({
    url: payload ? `${url}?api_key=${key}${payload}` : `${url}?api_key=${key}`,
    method
  })
    .then((response) => {
      return response.data;
    })
    .catch(error => Promise.reject(error))
};
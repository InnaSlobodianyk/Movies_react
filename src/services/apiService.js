import axios from "axios";
import { key } from "config";

export const sendRequest = async ({ url, method = "GET", params }) => {
  return await axios({
    url,
    method,
    params: {
      api_key: key,
      ...params
    }
  })
    .then((response) => {
      return response.data;
    })
    .catch(error => Promise.reject(error))
};
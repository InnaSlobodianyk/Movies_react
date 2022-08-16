import axios from "axios";

export const sendRequest = async ({ url, method = "get", payload }) => {
  return await axios({
    url,
    method,
    payload
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
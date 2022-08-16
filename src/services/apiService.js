import axios from "axios";

export const sendRequest = async ({ url, method = "GET", payload }) => {
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
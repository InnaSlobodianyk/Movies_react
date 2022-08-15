import axios from "axios";

export const sendRequest = async (url, method, payload) => {
  let requestMethod;

  switch (method) {
    case "POST":
      requestMethod = "post";
      break;
    default:
      requestMethod = "get";
      break;
  }

  return await axios[requestMethod](url, payload)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
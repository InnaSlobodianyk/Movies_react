import { sendRequest } from "./apiService";
import { apiRequestGenresUrl, key } from "config";

export const getAllGenres = async () => {
  try {
    return await sendRequest({url: `${apiRequestGenresUrl}?api_key=${key}`});
  } catch (e) {
    return [];
  }
}
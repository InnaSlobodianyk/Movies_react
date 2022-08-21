import { sendRequest } from "./apiService";
import { apiRequestGenresUrl } from "config";

export const getAllGenres = async () => {
  try {
    return await sendRequest({url: apiRequestGenresUrl});
  } catch (e) {
    return [];
  }
}
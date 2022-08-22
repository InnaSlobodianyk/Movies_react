import { sendRequest } from "./apiService";
import { apiRequestGenresUrl } from "config";

export const getAllGenres = async () => {
  try {
    const response = await sendRequest({url: apiRequestGenresUrl});

    return response.genres;
  } catch (e) {
    return [];
  }
}
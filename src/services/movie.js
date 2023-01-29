import { sendRequest } from "./apiService";
import { apiRequestUrl } from "config";
import {
  calcDate,
  formatBudget,
  formatGenresArray,
  formatRuntime
} from "helpers";

export const getMovie = async ( id ) => {
  try {
    const response = await sendRequest({
      url: `${apiRequestUrl}${id}`,
      params: {
        append_to_response: 'videos,similar,recommendations,credits',
        language: 'en'
      },
    });

    const runtime = formatRuntime(response.runtime);
    const budget = formatBudget(response.budget);
    const releaseYear = calcDate(response.release_date);
    const movieGenres = formatGenresArray(response.genres);

    return { ...response, runtime, budget, releaseYear, movieGenres };
  } catch (e) {
    return null;
  }
}
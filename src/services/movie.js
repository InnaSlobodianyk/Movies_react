import { sendRequest } from "./apiService";
import { apiRequestUrl } from "config";
import {
  calcDate,
  formatBudget,
  formatRuntime,
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

    const runtime = response.runtime > 0 ? formatRuntime(response.runtime) : '';
    const budget = formatBudget(response.budget);
    const release_date = calcDate(response.release_date);

    return { ...response, runtime, budget, release_date };
  } catch (e) {
    return null;
  }
}
import { sendRequest } from "./apiService";
import { apiRequestUrl } from "config";

export const getMovie = async ( id ) => {
  try {
    return await sendRequest({
      url: `${apiRequestUrl}${id}`,
      params: {
        append_to_response: 'videos,similar,recommendations,credits'
      },
    });
  } catch (e) {
    return null;
  }
}
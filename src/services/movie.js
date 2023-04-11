import { sendRequest } from "./apiService";
import { apiRequestUrl } from "config";

export const getMovie = async ( id ) => {
  const response = await sendRequest({
    url: `${apiRequestUrl}${id}`,
    params: {
      append_to_response: 'videos,similar,recommendations,credits',
      language: 'en'
    },
  });

  return response;
}
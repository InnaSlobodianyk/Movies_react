import { sendRequest } from "./apiService";
import { apiRequestSearchUrl } from "config";

export const getSearchResults = async ( query, pageNumber = 1 ) => {
  const response = await sendRequest({
    url: apiRequestSearchUrl,
    params: {
      page: pageNumber,
      query,
      language: 'en'
    },
  });

  return response;
}
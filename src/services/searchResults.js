import { sendRequest } from "./apiService";
import { apiRequestSearchUrl } from "config";

export const getSearchResults = async ( query, pageNumber = 1 ) => {
  try {
    const response = await sendRequest({
      url: apiRequestSearchUrl,
      params: {
        page: pageNumber,
        query: query,
        language: 'en'
      },
    });

    return response;
  } catch (e) {
    return [];
  }
}
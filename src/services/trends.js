import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl } from "config";

export const getTrends = async ( pageNumber = 1 ) => {
  const response = sendRequest({
    url: apiRequestTrendsUrl,
    params: {
      page: pageNumber,
      language: 'en'
    },
  });

  return response;
}
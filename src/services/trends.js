import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl } from "config";

export const getTrends = async () => {
  try {
    const response = await sendRequest({
      url: apiRequestTrendsUrl,
      params: {
        page: 1,
        language: 'en'
      },
    });

    return response.results;
  } catch (e) {
    return [];
  }
}
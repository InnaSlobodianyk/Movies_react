import { sendRequest } from "./apiService";
import { apiRequestPopularsUrl } from "config";

export const getPopulars = async () => {
  try {
    const response = await sendRequest({
      url: apiRequestPopularsUrl,
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
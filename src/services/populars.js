import { sendRequest } from "./apiService";
import { apiRequestPopularsUrl } from "config";

export const getPopulars = async ( language = 'en' ) => {
  try {
    const response = await sendRequest({
      url: apiRequestPopularsUrl,
      params: {
        page: 1,
        language
      },
    });

    return response.results;
  } catch (e) {
    return [];
  }
}
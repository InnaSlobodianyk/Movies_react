import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl, key } from "config";

export const getTrends = async () => {
  try {
    return await sendRequest({
      url: `${apiRequestTrendsUrl}?api_key=${key}`,
      payload: `&page=1&language=ru`
    });
  } catch (e) {
    return [];
  }
}
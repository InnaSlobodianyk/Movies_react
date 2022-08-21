import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl } from "config";

export const getTrends = async () => {
  try {
    return await sendRequest({
      url: apiRequestTrendsUrl,
      payload: `&page=1&language=en`
    });
  } catch (e) {
    return [];
  }
}
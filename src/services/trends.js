import { sendRequest } from './apiService';
import { apiRequestTrendsUrl } from 'config';

export const getTrends = async ( pageNumber = 1, language = 'en' ) => {
  const response = sendRequest( {
    url: apiRequestTrendsUrl,
    params: {
      page: pageNumber,
      language
    },
  } );

  return response;
}
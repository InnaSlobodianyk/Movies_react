import { sendRequest } from './apiService';
import { apiRequestGenresUrl } from 'config';

export const getAllGenres = async ( language = 'en' ) => {
  try {
    const response = await sendRequest( {
      url: apiRequestGenresUrl,
      params: {
        language
      },
    } );

    return response.genres;
  } catch ( e ) {
    return [];
  }
}
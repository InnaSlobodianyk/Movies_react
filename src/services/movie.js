import { sendRequest } from './apiService';
import { apiRequestUrl } from 'config';

export const getMovie = async ( { id, language = 'en' } ) => {
  const response = await sendRequest( {
    url: `${ apiRequestUrl }${ id }`,
    params: {
      append_to_response: 'videos,similar,recommendations,credits',
      language
    },
  } );

  return response;
}
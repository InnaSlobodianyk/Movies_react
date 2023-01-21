import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl } from "config";
import { getAllGenres } from "./genres";
import { filterGenres, roundRatingValue } from "helpers";

export const getTrends = async ( pageNumber = 1 ) => {
  try {
    const [trends, allGenres] = await Promise.all([
      sendRequest({
        url: apiRequestTrendsUrl,
        params: {
          page: pageNumber,
          language: 'en'
        },
      }),

      getAllGenres()
    ]);

    const movies = trends.results.map( movie => {
      const filteredGenres = filterGenres(allGenres, movie.genre_ids);
      const ratingRounded = roundRatingValue(movie.vote_average);

      return { ...movie, vote_average: ratingRounded, genres: filteredGenres }
    } );

    return movies;
  } catch (e) {
    return [];
  }
}
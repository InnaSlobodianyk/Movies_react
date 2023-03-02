import { sendRequest } from "./apiService";
import { apiRequestSearchUrl } from "config";
import { getAllGenres } from "./genres";
import { filterGenres, roundRatingValue } from "helpers";

export const getSearchResults = async ( query, pageNumber = 1 ) => {
  try {
    const [searchResults, allGenres] = await Promise.all([
      sendRequest({
        url: apiRequestSearchUrl,
        params: {
          page: pageNumber,
          query,
          language: 'en'
        },
      }),

      getAllGenres()
    ]);

    const movies = searchResults.results.map( movie => {
      const filteredGenres = filterGenres(allGenres, movie.genre_ids);
      const ratingRounded = roundRatingValue(movie.vote_average);

      return { ...movie, vote_average: ratingRounded, genres: filteredGenres }
    } );

    return { movies: { movies, page: pageNumber, totalPages: searchResults.total_pages, totalResults: searchResults.total_results } };
  } catch (e) {
    return null;
  }
}
import { sendRequest } from "./apiService";
import { apiRequestTrendsUrl } from "config";
import { getAllGenres } from "./genres";
import { calcDate, filterGenres, roundRatingValue } from "helpers";
import { getPopulars } from "./populars";

export const getTrends = async ( pageNumber = 1 ) => {
  try {
    const [trends, allGenres, populars] = await Promise.all([
      sendRequest({
        url: apiRequestTrendsUrl,
        params: {
          page: pageNumber,
          language: 'en'
        },
      }),

      getAllGenres(),

      getPopulars()
    ]);

    const movies = trends.results.map( movie => {
      const filteredGenres = filterGenres(allGenres, movie.genre_ids);
      const ratingRounded = roundRatingValue(movie.vote_average);

      return { ...movie, vote_average: ratingRounded, genres: filteredGenres }
    } );

    const popularMovies = populars.map( movie => {
      const filteredGenres = filterGenres(allGenres, movie.genre_ids);
      const release_date = calcDate(movie.release_date);

      return { ...movie, release_date, genres: filteredGenres }
    } );

    return { movies: { movies, page: pageNumber, totalPages: trends.total_pages, totalResults: trends.total_results }, populars: popularMovies };
  } catch (e) {
    return null;
  }
}
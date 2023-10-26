import { getTrends } from 'services/trends';
import { getAllGenres } from 'services/genres';
import { getPopulars } from 'services/populars';

import { setTrendsData, setTrendsFetchingState } from 'store/actions/trendsActions';
import { setPopularMoviesData } from 'store/actions/popularsActions';

import { calcDate, filterGenres, roundRatingValue } from 'helpers';

export const getMovieTrends = ( currentPage ) =>
  async ( dispatch ) => {
    dispatch( setTrendsFetchingState( true ) );

    try {
      const [ { results: trends, total_pages, total_results }, allGenres, populars ] = await Promise.all([
        getTrends( currentPage ),

        getAllGenres(),

        getPopulars()
      ]);

      const movies = trends.map( movie => {
        const filteredGenres = filterGenres(allGenres, movie.genre_ids);
        const ratingRounded = roundRatingValue(movie.vote_average);

        return { ...movie, vote_average: ratingRounded, genres: filteredGenres }
      } );

      const popularMovies = populars.map( movie  => {
        const filteredGenres = filterGenres(allGenres, movie.genre_ids);
        const release_date = calcDate(movie.release_date);

        return { ...movie, release_date, genres: filteredGenres }
      } );

      const trendsData = {
        trends: movies,
        currentPage,
        totalPages: total_pages <= 500 ? total_pages : 500,
        totalResults: total_results
      };

      dispatch( setPopularMoviesData( { movies: popularMovies, fetching: false } ) );

      dispatch( setTrendsData( trendsData ) );
    } catch (e) {
      dispatch( setTrendsData({
        trends: [],
        currentPage: 0,
        totalPages: 0,
        totalResults: 0
      }) );
    } finally {
      dispatch( setTrendsFetchingState( false ) );
    }
  };
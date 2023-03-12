import { getTrends } from 'services/trends';
import { getAllGenres } from 'services/genres';
import { getPopulars } from 'services/populars';
import { getMovie } from 'services/movie';
import { getSearchResults } from 'services/searchResults';

import { setCurrentPage, setLoadedState, setMovieDetails, setMoviesData } from '../actions';
import { calcDate, filterGenres, formatBudget, formatRuntime, roundRatingValue } from 'helpers';

export const getMovieTrends = ( currentPage ) =>
  async ( dispatch ) => {
    dispatch( setLoadedState(false) );

    try {
      const [trends, allGenres, populars] = await Promise.all([
        getTrends( currentPage ),

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

      const trendsData = { movies: { movies, page: currentPage, totalPages: trends.total_pages, totalResults: trends.total_results }, populars: popularMovies };

      dispatch( setMoviesData( trendsData ) );
      dispatch( setLoadedState(true) );
    } catch (e) {
      dispatch( setMoviesData( null ) );
      dispatch( setLoadedState(true) );
    }
  };

export const getMovieSearchResults = ( { searchQuery, currentPage } ) =>
  async ( dispatch ) => {
    dispatch( setLoadedState(false) );

    try {
      const [searchResults, allGenres] = await Promise.all([
        getSearchResults( searchQuery, currentPage ),

        getAllGenres()
      ]);

      const movies = searchResults.results.map( movie => {
        const filteredGenres = filterGenres(allGenres, movie.genre_ids);
        const ratingRounded = roundRatingValue(movie.vote_average);

        return { ...movie, vote_average: ratingRounded, genres: filteredGenres }
      } );

      const moviesData = { movies: { movies, page: currentPage, totalPages: searchResults.total_pages, totalResults: searchResults.total_results } };
      dispatch( setMoviesData( moviesData ) );

      dispatch( setLoadedState(true) );
    } catch(e) {
      dispatch( setMoviesData( null ) );

      dispatch( setLoadedState(true) );
    }
  };

export const getMovieDetails = ( id ) =>
  async ( dispatch ) => {
    dispatch( setLoadedState(false) );

    try {
      const response = await getMovie( id );

      const runtime = response.runtime > 0 ? formatRuntime( response.runtime ) : '';
      const budget = formatBudget( response.budget );
      const release_date = calcDate( response.release_date );

      const movie = { ...response, runtime, budget, release_date };

      dispatch( setMovieDetails( movie ) );
      dispatch( setLoadedState(true) );
    } catch ( e ) {
      dispatch( setMovieDetails( null ) );
      dispatch( setLoadedState(true) );
    }
  };

export const setPagination = ( { loaded, page = 1 } ) => ( dispatch ) => {
  dispatch( setLoadedState( loaded ) );
  dispatch( setCurrentPage( page ) );
};
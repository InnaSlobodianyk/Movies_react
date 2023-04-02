import { getTrends } from 'services/trends';
import { getAllGenres } from 'services/genres';
import { getPopulars } from 'services/populars';
import { getMovie } from 'services/movie';
import { getSearchResults } from 'services/searchResults';

import {
  setCurrentPage,
  setDefaultData,
  setFetchingState,
  setMovieDetails,
  setMovieFetchingState,
  setPopularMoviesData,
  setSearchMoviesData,
  setTrendsData
} from 'store/actions';

import {
  calcDate,
  filterGenres,
  formatBudget,
  formatRuntime,
  roundRatingValue
} from 'helpers';

export const getMovieTrends = ( currentPage ) =>
  async ( dispatch ) => {
    dispatch( setFetchingState( { isSearch: false, isFetching: true } ) );

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

      const popularMovies = populars.map( movie  => {
        const filteredGenres = filterGenres(allGenres, movie.genre_ids);
        const release_date = calcDate(movie.release_date);

        return { ...movie, release_date, genres: filteredGenres }
      } );

      const trendsData = {
        trends: movies,
        page: currentPage,
        totalPages: trends.total_pages,
        totalResults: trends.total_results
      };

      dispatch( setPopularMoviesData( { movies: popularMovies, fetching: false } ) );

      dispatch( setTrendsData( trendsData ) );
    } catch (e) {
      dispatch( setTrendsData( null ) );
    } finally {
      dispatch( setFetchingState( { isSearch: false, isFetching: false } ) );
    }
  };

export const getMovieSearchResults = ( { searchQuery, currentPage } ) =>
  async ( dispatch ) => {
    dispatch( setFetchingState( { isSearch: true, isFetching: true } ) );

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

      const moviesData = {
        searchQuery,
        searchedMovies: movies,
        page: searchResults.page,
        totalPages: searchResults.total_pages,
        totalResults: searchResults.total_results
      };

      dispatch( setSearchMoviesData( moviesData ) );
    } catch(e) {
      dispatch( setSearchMoviesData( null ) );
    } finally {
      dispatch( setFetchingState( { isSearch: true, isFetching: false } ) );
    }
  };

export const getMovieDetails = ( id ) =>
  async ( dispatch ) => {
    dispatch( setMovieFetchingState( true ) );

    try {
      const response = await getMovie( id );

      const runtime = response.runtime > 0 ? formatRuntime( response.runtime ) : '';
      const budget = formatBudget( response.budget );
      const release_date = calcDate( response.release_date );

      const movie = { ...response, runtime, budget, release_date };

      dispatch( setMovieDetails( movie ) );
    } catch ( e ) {
      dispatch( setMovieDetails( null ) );
    } finally {
      dispatch( setMovieFetchingState( false ) );
    }
  };

export const setPagination = ( { isSearch, fetching, page = 1 } ) => ( dispatch ) => {
  dispatch( setCurrentPage( { isSearch, fetching, page } ) );
};

export const resetSearchAndTrends = ( { isSearch, fetching, page = 1 } ) => {
  return dispatch => {
    dispatch( setDefaultData() );
    dispatch( setCurrentPage( { isSearch, fetching, page } ) );
  }
}
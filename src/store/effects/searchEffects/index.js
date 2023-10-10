import { getSearchResults } from 'services/searchResults';
import { getAllGenres } from 'services/genres';
import { setSearchFetchingState, setSearchMoviesData } from 'store/actions/searchActions';

import {
  filterGenres,
  isFavoriteMovie,
  roundRatingValue
} from 'helpers';

export const getMovieSearchResults = ( { searchQuery, currentPage, favoriteMovies } ) =>
  async ( dispatch ) => {
    dispatch( setSearchFetchingState( true ) );

    try {
      const [searchResults, allGenres] = await Promise.all([
        getSearchResults( searchQuery, currentPage ),

        getAllGenres()
      ]);

      const movies = searchResults.results.map( movie => {
        const filteredGenres = filterGenres(allGenres, movie.genre_ids);
        const ratingRounded = roundRatingValue(movie.vote_average);
        const isFavorite = isFavoriteMovie( favoriteMovies, movie );

        return { ...movie, vote_average: ratingRounded, genres: filteredGenres, favorite: isFavorite }
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
      dispatch( setSearchMoviesData( {
        searchQuery: '',
        searchedMovies: [],
        page: 0,
        totalPages: 0,
        totalResults: 0
      } ) );
    } finally {
      dispatch( setSearchFetchingState( false ) );
    }
  };
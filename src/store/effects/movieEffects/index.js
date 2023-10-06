import { getMovie } from 'services/movie';
import { setMovieDetails, setMovieFetchingState } from 'store/actions/movieActions';

import { calcDate, formatBudget, formatRuntime } from 'helpers';

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
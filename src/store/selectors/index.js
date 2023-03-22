export const selectorSearchStatus = state => ( {
  showSearchResults: state.showSearchResults,
  loaded: state.loaded
} );

export const selectorMovie = state => ( {
  movie: state.movie,
  loaded: state.loaded
} );

export const selectorState = state => state;
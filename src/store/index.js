import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialSearchState = {
  showSearchResults: false,
  searchQuery: '',
  searchResults: [],
  totalPages: 0,
  totalResults: 0
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    showSearchResults(state, showSearchResults = true) {
      state.showSearchResults = showSearchResults;
    },
    searchQuery(state, query) {
      state.searchQuery = query;
    },
    setSearchResults(state, results) {
      state.searchResults = results.payload;
    },
    setTotalPages(state, pagesNumber) {
      state.totalPages = pagesNumber.payload;
    },
    setTotalResults(state, totalResults) {
      state.totalResults = totalResults.payload;
    }
  }
});

const initialLoadingState = {
  loaded: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {
    setLoaded(state) {
      state.loaded = ! state.loaded;
    },
  }
});

let store = configureStore({
  reducer: { search: searchSlice.reducer, loading: loadingSlice.reducer }
});

export const searchActions = searchSlice.actions;
export const loadingActions = loadingSlice.actions;
export default store;
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

let store = configureStore({
  reducer: { search: searchSlice.reducer }
});

export const searchActions = searchSlice.actions;
export default store;
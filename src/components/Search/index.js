import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import {
  getMovieSearchResults,
  getMovieTrends,
  setCurrentPage,
  setLoadedState,
  setSearchQuery,
  setSearchResultsShow,
} from "store";

import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const loaded = useSelector( state => state.loaded );
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const onSearchInputChange = ( e ) => {
    const queryValue = e.target.value.toLowerCase();

    setQuery(queryValue);
  };

  const onFormSubmit = ( e ) => {
    e.preventDefault();

    dispatch( setLoadedState(false) );
    dispatch( setSearchQuery(query) );
    dispatch( setCurrentPage(1) );
    dispatch( setSearchResultsShow(true) );

    setQuery('');
    navigate('/');
  };

  return (
    <form
      className={ styles.searchForm }
      onSubmit={ onFormSubmit }
    >
      <input
        className={ styles.searchFormInput }
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={ query }
        onChange={ onSearchInputChange }
        disabled={ ! loaded }
      />
      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ ! query || ! loaded }
        onClick={ onFormSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

const mapStateToProps = ( state ) => {
  return {
    ...state,
    movies: state.movies,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalResults: state.totalResults,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps, {
  getMovieTrends, getMovieSearchResults, setCurrentPage,
  setLoadedState, setSearchQuery, setSearchResultsShow
})(Search);
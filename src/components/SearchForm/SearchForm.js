import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";

import Button from "components/Button/Button";
import { getSearchResults } from "services/searchResults";
import { loadingActions, searchActions } from "store";

import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const onSearchInputChange = ( e ) => {
    const query = e.target.value.toLowerCase();

    setSearchQuery(query);
  };

  const onFormSubmit = ( e ) => {
    e.preventDefault();

    dispatch(loadingActions.setLoaded(false));

    getSearchResults( searchQuery ).then((response) => {
      setSearchQuery('');

      dispatch(searchActions.showSearchResults());
      dispatch(searchActions.searchQuery(searchQuery));
      dispatch(searchActions.setSearchResults(response.results));
      dispatch(searchActions.setTotalPages(response.total_pages));
      dispatch(searchActions.setTotalResults(response.total_results));
      dispatch(loadingActions.setLoaded(true));
    });
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
        value={ searchQuery }
        onChange={ onSearchInputChange }
      />
      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ ! searchQuery && true }
        onClick={ onFormSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default SearchForm;
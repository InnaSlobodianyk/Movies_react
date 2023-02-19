import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/Button";

import { STORE_ACTIONS } from "store";

import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const dispatch = useDispatch();
  const loaded = useSelector( state => state.loaded );

  const [query, setQuery] = useState('');

  const onSearchInputChange = ( e ) => {
    const queryValue = e.target.value.toLowerCase();

    setQuery(queryValue);
  };

  const onFormSubmit = ( e ) => {
    e.preventDefault();

    dispatch( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: false } );
    dispatch( { type: STORE_ACTIONS.SEARCH_QUERY, payload: query } );
    dispatch( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: 1 } );
    dispatch( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: true } );
    setQuery('');
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

export default SearchForm;
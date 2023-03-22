import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import Button from "components/Button";

import styles from "./Search.module.scss";

const Search = ( { submitHandler, loaded } ) => {
  const [query, setQuery] = useState('');

  const onSearchInputChange = ( e ) => {
    const queryValue = e.target.value.toLowerCase();

    setQuery( queryValue );
  };

  const handlesSubmit = () => {
    submitHandler( query );
    setQuery('');
  };

  return (
    <form
      className={ styles.searchForm }
      onSubmit={ handlesSubmit }
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
        onClick={ handlesSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default Search;
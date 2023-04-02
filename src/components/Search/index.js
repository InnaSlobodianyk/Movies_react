import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import Button from "components/Button";

import styles from "./Search.module.scss";

const Search = ( { submitHandler, fetching } ) => {
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
        disabled={ fetching }
      />
      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ ! query || fetching }
        onClick={ handlesSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default Search;
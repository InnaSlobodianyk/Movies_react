import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import Button from "components/Button";

import styles from "./Search.module.scss";

const Search = ( { submitHandler, loaded } ) => {
  const [query, setQuery] = useState('');

  const onSearchInputChange = ( e ) => {
    if (e.key === 'Enter') {
      handlesSubmit();
    } else {
      const queryValue = e.target.value.toLowerCase();

      setQuery( queryValue );
    }
  };

  const handlesSubmit = () => {
    submitHandler( query );
    setQuery('');
  };

  return (
    <>
      <input
        className={ styles.searchFormInput }
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={ query }
        onChange={ onSearchInputChange }
        onKeyDown={ onSearchInputChange }
        disabled={ ! loaded }
      />
      <Button
        className={ styles.searchFormBtn }
        disabled={ ! query || ! loaded }
        onClick={ handlesSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </>
  );
};

export default Search;
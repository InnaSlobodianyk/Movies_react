import { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './Search.module.scss';

const defaultFormFields = { search: '' };

const Search = ( { submitHandler, fetching } ) => {
  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    control,
    watch,
    reset
  } = useForm( {
    defaultValues: defaultFormFields,
    mode: 'onChange',
  } );


  useEffect(() => {
    reset( defaultFormFields );
  }, [ isSubmitSuccessful, reset ] );

  const searchInputEmpty = watch( 'search' ) === '';

  const handlesSubmit = ( { search } ) => submitHandler( search );

  return (
    <form
      className={ styles.searchForm }
      onSubmit={ handleSubmit( handlesSubmit ) }
    >
      <Input
        className='search'
        type="text"
        placeholder="Search"
        aria-label="Search"
        name='search'
        disabled={ fetching }
        control={ control }
      />

      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ searchInputEmpty || fetching }
        onClick={ handlesSubmit }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default Search;
import { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './Search.module.scss';

const defaultValues = { search: '' };

const Search = ( { submitHandler, fetching } ) => {
  const {
    handleSubmit,
    formState: { isSubmitSuccessful, isDirty },
    control,
    reset
  } = useForm( {
    defaultValues,
    mode: 'onChange',
  } );


  useEffect(() => {
    if ( isSubmitSuccessful ) {
      reset( defaultValues );
    }
  }, [ isSubmitSuccessful, reset ] );

  return (
    <form
      className={ styles.searchForm }
      onSubmit={ handleSubmit( submitHandler ) }
    >
      <Input
        className='search'
        type="text"
        placeholder="Search"
        aria-label="Search"
        name='search'
        control={ control }
      />

      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ !isDirty || fetching }
        onClick={ submitHandler }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default Search;
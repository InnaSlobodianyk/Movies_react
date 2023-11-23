import { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button, { BUTTON_VARIANTS } from 'components/Button';
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

  const { t } = useTranslation();

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
        placeholder={ t( 'Search' ) }
        aria-label={ t( 'Search' ) }
        name='search'
        control={ control }
      />

      <Button
        type="submit"
        className={ styles.searchFormBtn }
        disabled={ !isDirty || fetching }
        onClick={ submitHandler }
        variant={ BUTTON_VARIANTS.transparent }
      >
        <IoSearch className={ styles.searchFormIcon } />
      </Button>
    </form>
  );
};

export default Search;
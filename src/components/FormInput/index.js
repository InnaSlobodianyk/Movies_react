import { useState } from 'react';
import cn from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = ({ label, onChange, error, ...rest }) => {
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = ( e ) => {
    const { value } = e.target;
    setInputValue( value );
    onChange({ name: rest.name, value });
  };

  return (
    <div className={ styles.formGroup }>
      <input className={ styles.formInput } onChange={ handleInputChange } value={ inputValue } { ...rest } />

      { label && (
        <label className={ cn(inputValue.length ? styles.shrink : '', styles.formInputLabel ) }>
          { label }
        </label>
      ) }

      { error && <div className={ styles.formErrorMessage }>{ error }</div> }
    </div>
  );
};

export default FormInput;
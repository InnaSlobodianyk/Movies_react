import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = forwardRef( ( { label, name, value, id, onChange, error, className, ...rest }, ref ) => {
  const handleInputChange = ( e ) => {
    const { value } = e.target;

    if ( onChange ) {
      onChange( value );
    }
  };

  return (
    <div className={ cn( styles.formGroup, className ) }>
      <input
        id={ id || name }
        className={ styles.formInput }
        onChange={ handleInputChange }
        value={ value }
        ref={ ref }
        { ...rest }
      />

      { label && (
        <label
          className={ cn(value?.length ? styles.shrink : '', styles.formInputLabel ) }
          htmlFor={ id || name }
        >
          { label }
        </label>
      ) }

      { error && <div className={ styles.formErrorMessage }>{ error }</div> }
    </div>
  );
} );

export default FormInput;

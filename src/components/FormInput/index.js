import cn from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = ( { label, name, value, register, errors, validationSchema, ...rest } ) => (
  <div className={ styles.formGroup }>
    <input
      className={ styles.formInput }
      id={ name }
      name={ name }
      { ...register( name, validationSchema ) }
      { ...rest }
    />

    { label && (
      <label
        className={ cn(value?.length ? styles.shrink : '', styles.formInputLabel ) }
        htmlFor={ name }
      >
        { label }
      </label>
    ) }

    { errors[ name ] && <div className={ styles.formErrorMessage }>{ errors[ name ].message }</div> }
  </div>
);

export default FormInput;
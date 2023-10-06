import cn from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = ({ label, value, onChange, error, ...rest }) => {

  const handleInputChange = ( e ) => {
    const { value } = e.target;
    onChange({ name: rest.name, value });
  };

  return (
    <div className={ styles.formGroup }>
      <input className={ styles.formInput } onChange={ handleInputChange } value={ value } { ...rest } />

      { label && (
        <label className={ cn(value?.length ? styles.shrink : '', styles.formInputLabel ) }>
          { label }
        </label>
      ) }

      { error && <div className={ styles.formErrorMessage }>{ error }</div> }
    </div>
  );
};

export default FormInput;
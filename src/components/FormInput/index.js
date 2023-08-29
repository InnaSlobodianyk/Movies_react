import cn from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={ styles.formGroup }>
      <input className={ styles.formInput } { ...otherProps } />

      { label && (
        <label className={ cn(otherProps.value.length ? styles.shrink : '', styles.formInputLabel ) }>
          { label }
        </label>
      ) }
    </div>
  );
};

export default FormInput;
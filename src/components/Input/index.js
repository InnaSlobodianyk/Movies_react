import { useController } from 'react-hook-form';
import cn from 'classnames';

import styles from 'components/FormInput/FormInput.module.scss';

const Input = ( { label, name, required, control, validationSchema, ...rest } ) => {
  const {
    field: { name: fieldName, value, onChange, ...fieldRest },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name,
    control,
    rules: validationSchema,
  });

  return (
    <div className={ styles.formGroup }>
      <input
        className={ styles.formInput }
        id={ fieldName }
        name={ fieldName }
        value={ value }
        onChange={ onChange }
        { ...fieldRest }
        { ...rest }
      />

      { label && (
        <label
          className={ cn( value?.length ? styles.shrink : '', styles.formInputLabel ) }
          htmlFor={ fieldName }
        >
          { label }
        </label>
      ) }

      {/*TODO: for the next step with validation*/}
      { invalid && errors[ name ] && <div className={ styles.formErrorMessage }>{ errors[ name ].message }</div> }
    </div>
  );
};

export default Input;

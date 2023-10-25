import { useController } from 'react-hook-form';
import cn from 'classnames';

import styles from 'components/FormInput/FormInput.module.scss';

const Input = ( { label, name, id, required, control, validationSchema, ...rest } ) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: validationSchema,
  });

  return (
    <div className={ styles.formGroup }>
      <input
        className={ styles.formInput }
        id={ id || name }
        { ...field }
        { ...rest }
      />

      { label && (
        <label
          className={ cn( field.value?.length ? styles.shrink : '', styles.formInputLabel ) }
          htmlFor={ id || name }
        >
          { label }
        </label>
      ) }

      { error?.message && <div className={ styles.formErrorMessage }>{ error?.message }</div> }
    </div>
  );
};

export default Input;

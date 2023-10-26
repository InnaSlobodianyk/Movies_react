import { useController } from 'react-hook-form';

import FormInput from 'components/FormInput';

const Input = ( { name, control, ...rest } ) => {
  const {
    field,
    fieldState: { error },
  } = useController( {
    name,
    control,
  } );

  return <FormInput error={ error?.message || '' } { ...field } { ...rest } />;
};

export default Input;

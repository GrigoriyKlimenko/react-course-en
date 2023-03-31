import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { textInputRule } from '@components/Form/validation';

type Props = {
  label: string;
  name: FormValuesKeys;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const TextValueInput = (props: Props) => {
  const { label, name, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div className="field">
      <label>{label}:</label>
      <input
        {...register(name, { ...textInputRule })}
        className={validationErrorMessage ? 'error' : 'input'}
        type="text"
      />
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

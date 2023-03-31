import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { birthdayInputRule } from '@components/Form/validation';

type Props = {
  label: string;
  name: Extract<FormValuesKeys, 'birthday'>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const DateValueInput = (props: Props) => {
  const { label, name, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div className="field">
      <label>{label}:</label>
      <input
        {...register(name, { ...birthdayInputRule })}
        className={validationErrorMessage ? 'error' : 'input'}
        type="date"
      />
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

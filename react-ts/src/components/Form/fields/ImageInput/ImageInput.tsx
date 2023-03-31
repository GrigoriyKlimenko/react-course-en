import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { imageInputRule } from '@components/Form/validation';

type Props = {
  label: string;
  name: FormValuesKeys;
  typeAccept: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const ImageInput = (props: Props) => {
  const { label, name, typeAccept, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div className="field">
      <label>{label}:</label>
      <input
        {...register(name, { ...imageInputRule })}
        className={validationErrorMessage ? 'error' : 'input'}
        accept={typeAccept}
        type="file"
      />
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

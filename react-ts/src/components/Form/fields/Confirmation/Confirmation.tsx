import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { confirmInputRule } from '@components/Form/validation';
import './styles.css';

type Props = {
  label: string;
  name: FormValuesKeys;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const Confirmation = (props: Props) => {
  const { label, name, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div>
      <div className="checkboxField">
        <input
          {...register(name, { ...confirmInputRule })}
          className="checkbox"
          type="checkbox"
        />
        <label>{label}</label>
      </div>
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

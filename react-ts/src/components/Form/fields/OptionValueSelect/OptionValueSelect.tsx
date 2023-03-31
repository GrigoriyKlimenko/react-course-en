import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { raceClassInputRule } from '@components/Form/validation';
import './styles.css';

type Props = {
  label: string;
  name: FormValuesKeys;
  options: { title: string; value: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const OptionValueSelect = (props: Props) => {
  const { label, name, options, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div className="field">
      <label>{label}:</label>
      <select
        {...register(name, { ...raceClassInputRule })}
        className={validationErrorMessage ? 'error' : 'select'}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

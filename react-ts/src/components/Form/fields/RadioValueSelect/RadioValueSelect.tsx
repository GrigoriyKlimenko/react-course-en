import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidationError } from '@components/Form/validation/ValidationError';
import { FormValues, FormValuesKeys } from '@components/Form';
import { genderInputRule } from '@components/Form/validation';
import './styles.css';

type Props = {
  label: string;
  name: FormValuesKeys;
  options: { id: string; title: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const RadioValueSelect = (props: Props) => {
  const { label, name, options, register, errors } = props;
  const validationErrorMessage = errors?.[name]?.message || '';

  return (
    <div className="field">
      <label>{label}:</label>
      {options.map((item) => (
        <div key={item.id}>
          <input
            {...register(name, { ...genderInputRule })}
            type="radio"
            name={item.id}
            value={item.id}
          />
          <label>{item.title}</label>
        </div>
      ))}
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

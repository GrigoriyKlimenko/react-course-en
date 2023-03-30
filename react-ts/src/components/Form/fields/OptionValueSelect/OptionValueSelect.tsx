import { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  name: string;
  options: { title: string; value: string }[];
  reference: RefObject<HTMLSelectElement>;
  validationErrorMessage: string;
};

export const OptionValueSelect = (props: Props) => {
  const { name, options, reference, validationErrorMessage } = props;

  return (
    <div className="field">
      <label htmlFor={name}> Racing class: </label>
      <select
        className={validationErrorMessage ? 'error' : 'select'}
        id={name}
        ref={reference}
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

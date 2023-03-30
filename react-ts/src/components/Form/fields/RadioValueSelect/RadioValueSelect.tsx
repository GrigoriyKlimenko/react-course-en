import { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  options: { id: string; title: string }[];
  name: string;
  referenceArray: RefObject<HTMLInputElement>[];
  validationErrorMessage: string;
};

export const RadioValueSelect = (props: Props) => {
  const { name, options, referenceArray, validationErrorMessage } = props;

  return (
    <div className="field">
      <label>{name}:</label>
      {options.map((item, idx) => (
        <div key={item.id}>
          <input
            type="radio"
            id={item.id}
            name="gender"
            value={item.id}
            ref={referenceArray[idx]}
          />
          <label htmlFor={item.id}>{item.title}</label>
        </div>
      ))}
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

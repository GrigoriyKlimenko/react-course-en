import { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  label: string;
  reference: RefObject<HTMLInputElement>;
  validationErrorMessage: string;
};

export const Confirmation = (props: Props) => {
  const { label, reference, validationErrorMessage } = props;

  return (
    <div>
      <div className="checkboxField">
        <input className="checkbox" type="checkbox" ref={reference} />
        <label>{label}</label>
      </div>
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

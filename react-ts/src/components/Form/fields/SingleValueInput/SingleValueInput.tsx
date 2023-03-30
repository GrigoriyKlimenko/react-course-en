import { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  type: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  validationErrorMessage: string;
  typeAccept?: string;
};

export const SingleValueInput = (props: Props) => {
  const { type, name, reference, validationErrorMessage, typeAccept } = props;

  return (
    <div className="field">
      <label htmlFor={name}>{name}:</label>
      <input
        className={validationErrorMessage ? 'error' : 'input'}
        id={name}
        type={type}
        name={name}
        ref={reference}
        accept={typeAccept}
      />
      <ValidationError errorMessage={validationErrorMessage} />
    </div>
  );
};

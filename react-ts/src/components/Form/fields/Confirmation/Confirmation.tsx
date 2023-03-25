import React, { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  label: string;
  reference: RefObject<HTMLInputElement>;
  validationErrorMessage: string;
};

export class Confirmation extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="checkboxField">
          <input
            className="checkbox"
            type="checkbox"
            ref={this.props.reference}
          />
          <label>{this.props.label}</label>
        </div>
        <ValidationError errorMessage={this.props.validationErrorMessage} />
      </div>
    );
  }
}

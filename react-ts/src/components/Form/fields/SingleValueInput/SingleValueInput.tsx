import React, { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  type: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  validationErrorMessage: string;
  typeAccept?: string;
};

export class SingleValueInput extends React.Component<Props> {
  render() {
    return (
      <div className="field">
        <label htmlFor={this.props.name}>{this.props.name}:</label>
        <input
          className={this.props.validationErrorMessage ? 'error' : 'input'}
          id={this.props.name}
          type={this.props.type}
          name={this.props.name}
          ref={this.props.reference}
          accept={this.props.typeAccept}
        />
        <ValidationError errorMessage={this.props.validationErrorMessage} />
      </div>
    );
  }
}

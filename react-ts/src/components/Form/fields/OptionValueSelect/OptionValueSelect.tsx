import React, { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  name: string;
  options: { title: string; value: string }[];
  reference: RefObject<HTMLSelectElement>;
  validationErrorMessage: string;
};

export class OptionValueSelect extends React.Component<Props> {
  render() {
    return (
      <div className="field">
        <label htmlFor={this.props.name}> Racing class: </label>
        <select
          className={this.props.validationErrorMessage ? 'error' : 'select'}
          id={this.props.name}
          ref={this.props.reference}
        >
          {this.props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        <ValidationError errorMessage={this.props.validationErrorMessage} />
      </div>
    );
  }
}

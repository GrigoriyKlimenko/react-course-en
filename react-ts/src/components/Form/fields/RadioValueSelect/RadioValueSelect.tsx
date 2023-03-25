import React, { RefObject } from 'react';
import { ValidationError } from '@components/Form/validation/ValidationError';
import './styles.css';

type Props = {
  options: { id: string; title: string }[];
  name: string;
  referenceArray: RefObject<HTMLInputElement>[];
  validationErrorMessage: string;
};

export class RadioValueSelect extends React.Component<Props> {
  render() {
    return (
      <div className="field">
        <label>{this.props.name}:</label>
        {this.props.options.map((item, idx) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.id}
              name="gender"
              value={item.id}
              ref={this.props.referenceArray[idx]}
            />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        ))}
        <ValidationError errorMessage={this.props.validationErrorMessage} />
      </div>
    );
  }
}

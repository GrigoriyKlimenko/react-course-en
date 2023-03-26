import React from 'react';
import './styles.css';

type Props = {
  errorMessage: string;
};

export class ValidationError extends React.Component<Props> {
  render() {
    return (
      <>
        {this.props.errorMessage && (
          <h6 className="error">{this.props.errorMessage}</h6>
        )}
      </>
    );
  }
}

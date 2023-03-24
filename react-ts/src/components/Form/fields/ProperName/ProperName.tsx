import React, { RefObject } from 'react';

type Props = {
  label: string;
  reference: RefObject<HTMLInputElement>;
};

export class ProperName extends React.Component<Props> {
  render() {
    return (
      <>
        <label>{this.props.label}</label>
        <input type="text" name={this.props.label} ref={this.props.reference} />
      </>
    );
  }
}

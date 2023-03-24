import React, { RefObject } from 'react';

type Props = {
  reference: RefObject<HTMLInputElement>;
};

export class Confirmation extends React.Component<Props> {
  render() {
    return (
      <label>
        <input type="checkbox" ref={this.props.reference} /> Confirm rules
      </label>
    );
  }
}

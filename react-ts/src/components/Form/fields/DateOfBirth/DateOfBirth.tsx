import React, { RefObject } from 'react';

type Props = {
  reference: RefObject<HTMLInputElement>;
};

export class DateOfBirth extends React.Component<Props> {
  render() {
    return (
      <>
        <label>Date of birth</label>
        <input type="date" ref={this.props.reference} />
      </>
    );
  }
}

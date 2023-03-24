import React, { RefObject } from 'react';

type Props = {
  reference: RefObject<HTMLInputElement>;
};

export class FileUpload extends React.Component<Props> {
  render() {
    return (
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={this.props.reference}
      />
    );
  }
}

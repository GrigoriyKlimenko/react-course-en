import React, { RefObject } from 'react';

type Props = {
  reference: RefObject<HTMLSelectElement>;
};

export class RacingClass extends React.Component<Props> {
  render() {
    return (
      <div>
        <label htmlFor="select"> Racing class: </label>
        <select id="select" ref={this.props.reference}>
          <option value="">None</option>
          <option value="Drag racing">Drag racing</option>
          <option value="Drift racing">Drift racing</option>
          <option value="Ring racing">Ring racing</option>
          <option value="Cross country racing">Cross country racing</option>
        </select>
      </div>
    );
  }
}

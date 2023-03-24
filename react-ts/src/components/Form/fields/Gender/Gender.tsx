import React, { RefObject } from 'react';

type Props = {
  referenceArray: RefObject<HTMLInputElement>[];
};

const GENDER_OPTIONS = [
  {
    id: 'male',
    title: 'Male',
  },
  {
    id: 'female',
    title: 'Female',
  },
];

export class Gender extends React.Component<Props> {
  render() {
    return (
      <>
        <label>Gender</label>
        {GENDER_OPTIONS.map((item, idx) => (
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
      </>
    );
  }
}

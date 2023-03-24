import React from 'react';
import { CardType } from './types';
import './styles.css';

type CardProps = {
  data: CardType;
};

export class Card extends React.Component<CardProps> {
  render() {
    const { name, image, date, gender, raceClasses, city } = this.props.data;
    return (
      <div data-testid="card" className="cardWrapper">
        <div className="card">
          <img src={image} alt="avatar" />
          <div>Full name: {name}</div>
          <div>City: {city}</div>
          <div>Date of birth: {date}</div>
          <div>Gender: {gender}</div>
          <div>Race classes: {raceClasses.join(', ')}</div>
        </div>
      </div>
    );
  }
}

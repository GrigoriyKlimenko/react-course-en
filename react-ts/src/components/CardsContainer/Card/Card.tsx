import React from 'react';
import { CardType } from './types';
import './styles.css';

type CardProps = {
  data: CardType;
};

export class Card extends React.Component<CardProps> {
  render() {
    const { title, image, views, city, date } = this.props.data;
    return (
      <div className="cardWrapper">
        <div className="card">
          <img src={image} alt="avatar" />
          <div>Title: {title}</div>
          <div>Date: {date}</div>
          <div>City: {city}</div>
          <div>Views: {views}</div>
        </div>
      </div>
    );
  }
}

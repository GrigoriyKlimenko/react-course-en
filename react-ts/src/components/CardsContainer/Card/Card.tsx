import React from 'react';
import { CardType } from './types';
import './styles.css';

type CardProps = {
  data: CardType;
};

export class Card extends React.Component<CardProps> {
  render() {
    const { title, image } = this.props.data;
    return (
<div className="cardWrapper">
  <div className="card">
    <div>
      <img src={image} />
    </div>
    <div>Title: {title}</div>
  </div>
</div>
    );
  }
}

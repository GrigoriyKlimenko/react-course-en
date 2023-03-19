import React from 'react';
import { Card } from './Card';
import { CardType } from './Card/types';
import './styles.css';

type CardsContainerProps = {
  cards: CardType[];
};

export class CardsContainer extends React.Component<CardsContainerProps> {
  render() {
    return (
      <div className="cardsContainer">
        {this.props.cards.map((card: CardType) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    );
  }
}

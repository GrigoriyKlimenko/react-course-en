import React from 'react';
import { Card } from './Card';
import { CardType } from './Card/types';
import './styles.css';

type CardsContainerProps = {
  cards: CardType[];
};

export class CardsContainer extends React.Component<CardsContainerProps> {
  // tinp = createRef<HTMLInputElement>();
  // handleSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
  //   // e.preventDefault();
  //   console.log(this.tinp);
  // };
  render() {
    return (
      <div className="cardsContainer">
        {this.props.cards.map((card: CardType) => (
          <Card key={card.id} data={card} />
        ))}
        {/*<input type="text" ref={this.tinp} />*/}
        {/*<button onClick={this.handleSubmit}>GGGG</button>*/}
      </div>
    );
  }
}

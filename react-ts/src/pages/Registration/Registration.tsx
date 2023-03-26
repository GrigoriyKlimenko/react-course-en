import React from 'react';
import { Form } from '@components/Form';
import { CardsContainer } from '@components/CardsContainer';
import { CardType } from '@components/CardsContainer/Card/types';
import './styles.css';

type StateProps = {
  cards: CardType[] | [];
};

export class Registration extends React.Component<unknown, StateProps> {
  state = {
    cards: [],
  };

  addCard = (card: CardType) => {
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  };

  render() {
    return (
      <>
        <h1>Participants registration of the &quot;Race days&quot; event</h1>
        <div className="registrationContainer">
          <Form addCard={this.addCard} />
          {this.state.cards.length > 0 && <h2>Submitted cards:</h2>}
          <CardsContainer cards={this.state.cards} />
        </div>
      </>
    );
  }
}

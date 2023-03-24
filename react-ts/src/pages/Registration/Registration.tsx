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
    console.log(card);
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  };

  render() {
    return (
      <div className="registrationContainer">
        <h1>Participants registration of the &quot;Race days&quot; event</h1>
        <Form addCard={this.addCard} />
        <CardsContainer cards={this.state.cards} />
      </div>
    );
  }
}

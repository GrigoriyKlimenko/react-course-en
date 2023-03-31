import { useState } from 'react';
import { Form } from '@components/Form';
import { CardsContainer } from '@components/CardsContainer';
import { CardType } from '@components/CardsContainer/Card/types';
import './styles.css';

export const Registration = () => {
  const [cards, setCards] = useState<CardType[] | []>([]);

  const addCard = (card: CardType) => {
    setCards((prevState) => [...prevState, card]);
  };

  return (
    <>
      <h1>Participants registration of the &quot;Race days&quot; event</h1>
      <div className="registrationContainer">
        <Form addCard={addCard} />
        {cards.length > 0 && <h2>Submitted cards:</h2>}
        <CardsContainer cards={cards} />
      </div>
    </>
  );
};

import { Form } from '@components/Form';
import { FormCard } from '@components/Form/FormCard';
import { CardType } from '@components/CardsContainer/Card/types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { cardsFormSlice } from '@/store/reducers/CardsFormSlice';
import './styles.css';

export const Registration = () => {
  const { cards } = useAppSelector((state) => state.cardsFormReducer);
  const { saveCard } = cardsFormSlice.actions;
  const dispatch = useAppDispatch();

  const addCard = (card: CardType) => {
    dispatch(saveCard(card));
  };

  return (
    <>
      <h1>Participants registration of the &quot;Race days&quot; event</h1>
      <div className="registrationContainer">
        <Form addCard={addCard} />
        {cards.length > 0 && <h2>Submitted cards:</h2>}
        <div className="cardsContainer">
          {cards &&
            cards.map((card: CardType) => (
              <FormCard key={card.id} data={card} />
            ))}
        </div>
      </div>
    </>
  );
};

import { Card } from './Card';
import { CardType } from './Card/types';
import './styles.css';

type CardsContainerProps = {
  cards: CardType[];
};

export const CardsContainer = ({ cards }: CardsContainerProps) => {
  return (
    <div className="cardsContainer">
      {cards.map((card: CardType) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

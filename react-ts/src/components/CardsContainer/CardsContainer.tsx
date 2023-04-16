import { Card } from './Card';
import { PartialCardType } from './Card/types';
import './styles.css';

type Props = {
  cards: PartialCardType[] | null | undefined;
};

export const CardsContainer = ({ cards }: Props) => {
  return (
    <div className="cardsContainer">
      {cards &&
        cards.map((card: PartialCardType) => (
          <Card key={card.id} data={card} />
        ))}
    </div>
  );
};

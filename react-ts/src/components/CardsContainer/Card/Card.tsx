import { useState } from 'react';
import { PartialCardType } from './types';
import { CardInfoModal } from '@components/CardsContainer/Card/CardInfoModal';
import './styles.css';

type Props = {
  data: PartialCardType;
};

export const Card = ({ data }: Props) => {
  const { name, image } = data;
  const [isCardInfoModalOpen, setIsCardInfoModalOpen] = useState(false);

  const handleCardInfoModalOpen = () => {
    setIsCardInfoModalOpen(true);
  };

  const handleCardInfoModalClose = () => {
    setIsCardInfoModalOpen(false);
  };

  return (
    <>
      <div data-testid="card" className="cardWrapper">
        <div className="card" onClick={handleCardInfoModalOpen}>
          <img src={image} alt="avatar" />
          <div>Full name: {name}</div>
        </div>
      </div>
      {isCardInfoModalOpen && (
        <CardInfoModal
          cardId={data.id}
          handleClose={handleCardInfoModalClose}
        />
      )}
    </>
  );
};

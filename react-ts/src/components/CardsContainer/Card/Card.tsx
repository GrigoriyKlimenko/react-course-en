import { useState } from 'react';
import { CardProps } from './types';
import { CardInfoModal } from '@components/CardsContainer/Card/CardInfoModal';
import './styles.css';

export const Card = ({ data }: CardProps) => {
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

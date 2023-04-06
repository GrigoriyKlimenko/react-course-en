import { CardType } from '@components/CardsContainer/Card/types';

type CardProps = {
  data: CardType;
};

export const FormCard = ({ data }: CardProps) => {
  const { name, image, date, gender, raceClass, city } = data;
  return (
    <div data-testid="card" className="cardWrapper">
      <div className="card">
        <img src={image} alt="avatar" />
        <div>Full name: {name}</div>
        <div>City: {city}</div>
        <div>Date of birth: {date}</div>
        <div>Gender: {gender}</div>
        <div>Race class: {raceClass}</div>
      </div>
    </div>
  );
};

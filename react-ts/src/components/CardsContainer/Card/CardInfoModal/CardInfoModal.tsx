import { CardType } from '@components/CardsContainer/Card/types';
import './styles.css';

type CardInfoModalProps = {
  data: CardType;
  handleClose: () => void;
};

export const CardInfoModal = ({ data, handleClose }: CardInfoModalProps) => {
  const { name, image, date, gender, raceClass, city } = data;

  return (
    <div className="modal" onClick={() => handleClose()}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2 className="modalTitle">Racer info</h2>
          <button className="closeIcon" onClick={handleClose}>
            &#10006;
          </button>
        </div>
        <div className="modalBody">
          <img src={image} alt="avatar" />
          <div className="modalInfo">
            <div>Full name: {name}</div>
            <div>City: {city}</div>
            <div>Date of birth: {date}</div>
            <div>Gender: {gender}</div>
            <div>Race class: {raceClass}</div>
          </div>
        </div>
        <div className="modalFooter"></div>
      </div>
    </div>
  );
};

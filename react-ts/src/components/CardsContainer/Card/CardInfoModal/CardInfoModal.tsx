import { CardType } from '@components/CardsContainer/Card/types';
import './styles.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@data/baseUrl';
import { Loader } from '@components/Loader';

type CardInfoModalProps = {
  // data: CardType;
  cardId: string;
  handleClose: () => void;
};

export const CardInfoModal = ({ cardId, handleClose }: CardInfoModalProps) => {
  // const { name, image, date, gender, raceClass, city } = data;
  const [data, setData] = useState({
    name: '',
    image: '',
    date: '',
    gender: '',
    raceClass: '',
    city: '',
  });
  const [getDataError, setGetDataError] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(true);
  useEffect(() => {
    setGetDataError('');
    // setIsDataLoading(true);
    fetch(`${BASE_URL}/${cardId}`)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error('Something wrong');
      })
      .then((card) => setData(card))
      .catch((error) => {
        setGetDataError(error);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  }, [cardId]);

  return (
    <>
      {isDataLoading && <Loader />}
      {!isDataLoading && (
        <div className="modal" onClick={() => handleClose()}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h2 className="modalTitle">Racer info</h2>
              <button className="closeIcon" onClick={handleClose}>
                &#10006;
              </button>
            </div>
            <div className="modalBody">
              <img src={data.image} alt="avatar" />
              <div className="modalInfo">
                <div>Full name: {data.name}</div>
                <div>City: {data.city}</div>
                <div>Date of birth: {data.date}</div>
                <div>Gender: {data.gender}</div>
                <div>Race class: {data.raceClass}</div>
              </div>
            </div>
            <div className="modalFooter"></div>
          </div>
        </div>
      )}
    </>
  );
};

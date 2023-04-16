import { useEffect } from 'react';
import { Loader } from '@components/Loader';
import { cardsAPI } from '@/services/cardsService';
import './styles.css';

type Props = {
  cardId: string;
  handleClose: () => void;
};

export const CardInfoModal = ({ cardId, handleClose }: Props) => {
  const [trigger, { data, isFetching, error }] =
    cardsAPI.useLazyFetchCardInfoQuery();

  useEffect(() => {
    trigger(cardId, false);
  }, [cardId, trigger]);

  return (
    <>
      {isFetching && <Loader />}
      {!isFetching && (
        <div className="modal" onClick={() => handleClose()}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h2 className="modalTitle">Racer info</h2>
              <button className="closeIcon" onClick={handleClose}>
                &#10006;
              </button>
            </div>
            {error && <h3>Oops, something happened...</h3>}
            {data && (
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
            )}
            <div className="modalFooter"></div>
          </div>
        </div>
      )}
    </>
  );
};

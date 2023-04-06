import { useEffect } from 'react';
import useFetchData from '@/hooks/useFetchData';
import { BASE_URL } from '@data/baseUrl';
import { CardType } from '@components/CardsContainer/Card/types';
import { Loader } from '@components/Loader';
import './styles.css';

type Props = {
  cardId: string;
  handleClose: () => void;
};

export const CardInfoModal = ({ cardId, handleClose }: Props) => {
  const { data, isDataLoading, gettingDataError, setReqUrl } =
    useFetchData<CardType>('');

  useEffect(() => {
    const oneCardReqUrl = `${BASE_URL}/${cardId}`;
    setReqUrl(oneCardReqUrl);
  }, [cardId, setReqUrl]);

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
            {gettingDataError && <h3>{gettingDataError}</h3>}
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

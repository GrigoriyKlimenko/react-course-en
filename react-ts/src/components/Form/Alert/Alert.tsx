import './styles.css';

type Props = {
  handleClose: () => void;
};

export const Alert = ({ handleClose }: Props) => {
  return (
    <div className="alertWrapper">
      <div className="alertContainer">
        <div className="alertHeader">
          <button className="closeIcon" onClick={handleClose}>
            &#10006;
          </button>
        </div>
        <div className="alertText">The card was successfully created</div>
        <div className="alertFooter">
          <button className="alertButton" onClick={handleClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

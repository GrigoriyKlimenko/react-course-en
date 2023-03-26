import React from 'react';
import './styles.css';

type Props = {
  handleClose: () => void;
};

export class Alert extends React.Component<Props> {
  render() {
    return (
      <div className="alertWrapper">
        <div className="alertContainer">
          <div className="alertHeader">
            <button className="closeIcon" onClick={this.props.handleClose}>
              &#10006;
            </button>
          </div>
          <div className="alertText">The card was successfully created</div>
          <div className="alertFooter">
            <button className="alertButton" onClick={this.props.handleClose}>
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}

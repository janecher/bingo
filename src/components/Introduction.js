import React from 'react';
import PropTypes from "prop-types";

function Introduction(props){

  let buttonIntro = null;

  if(props.toggleStartStop){
    buttonIntro = <button className="btn btn-dark btn-lg btn-block" onClick = {props.onStopClick}>Stop</button>
  } else {
    buttonIntro = <button className="btn btn-dark btn-lg btn-block" onClick = {props.onStartClick}>Start</button>
  }

  return (
    <React.Fragment>
      <div className = "introduction">
        <div className = "text-center m-3 pb-4 introHeader">
          <h2>Introduction</h2>
        </div>
        <div className = "p-4">
          <p>You will have two cards with 24 cells on each card. Click on "Next" button to get next random number from 1 to 30. 
          If you fill all cards - you win!<br/><br/>
          <strong>Good luck!</strong></p>
          {buttonIntro}
        </div>
      </div>
    </React.Fragment>
  );
}

Introduction.propTypes = {
  onStartClick: PropTypes.func,
  onStopClick: PropTypes.func,
  toggleStartStop: PropTypes.bool
};

export default Introduction; 
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
          <p>You will have two cards with 24 cells on each card. 
          Game will run 50 times, randomly choose numbers from 1 to 30 
          (you will get these numbers also on your card). 
          For each iteration you will have 10 seconds to search number on your cards.
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
import React from 'react';
import PropTypes from "prop-types";

function Introduction(props){
  return (
    <React.Fragment>
      <div className = "introduction">
        <div id="introHeader">
          <h2>Introduction</h2>
        </div>
        <div id="introInfo">
          <p>You will have two cards with 24 cells on each card. 
          Game will run 50 times, randomly choose numbers from 1 to 30 
          (you will get these numbers also on your card). 
          For each iteration you will have 10 seconds to search number on your cards.
          If you fill all cards - you win!<br/><br/>
          <strong>Good luck!</strong></p>
        </div>
        <button id="start" onClick = {props.onStartClick}>Start</button>
      </div>
    </React.Fragment>
  );
}

Introduction.propTypes = {
  onStartClick: PropTypes.func
};

export default Introduction; 
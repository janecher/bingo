import React from 'react';
import PropTypes from "prop-types";

function NumberToSearch(props){
  return (
    <React.Fragment>
      <div className="getNumber">
        <h3>Find the number: <span id="number">{props.number}</span><span><button className="btn btn-dark ml-5 mb-2" onClick = {props.onNextNumber}>Next</button></span></h3>
      </div>
    </React.Fragment>
  );
}

NumberToSearch.propTypes = {
  number: PropTypes.number,
  onNextNumber: PropTypes.func
};

export default NumberToSearch; 
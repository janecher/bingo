import React from 'react';
import PropTypes from "prop-types";

function NumberToSearch(props){
  return (
    <React.Fragment>
      <div className="getNumber">
        <h3>Find the number: <span id="number">{props.number}</span></h3>
      </div>
    </React.Fragment>
  );
}

NumberToSearch.propTypes = {
  number: PropTypes.number
};

export default NumberToSearch; 
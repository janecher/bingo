import React, { useState } from 'react';
import PropTypes from "prop-types";

function Cell(props){

  const [cellColor, setCellColor] = useState("black");

  const handleCellClick = (cell, number) => {
    if(cell === number)
    {
      setCellColor("white");
    } 
  }

  return(
    <React.Fragment>
      <div style={{color: cellColor}} onClick ={() => handleCellClick(props.cellValue, props.displayNumber)}>{props.cellValue}</div>
    </React.Fragment>
  );
}

Cell.propTypes = {
  cellValue: PropTypes.number,
  displayNumber: PropTypes.number
};

export default Cell;
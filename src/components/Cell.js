import React, {useState} from 'react';

function Cell(){

  const [color, setColor] = useState("black");

  const handleCellClick = (cell, number) => {
    if(cell === number)
    {
      setColor("green");
    }
  }

  return(
    <React.Fragment>
      <div style={{color: color}} onClick ={handleCellClick(props.cellValue, props.displayNumber)}>{props.cellValue}</div>
    </React.Fragment>
  );
}

Cell.propTypes = {
  cellValue: PropTypes.number,
  displayNumber: PropTypes.number
};


export default Cell;
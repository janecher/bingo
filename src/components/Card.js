import React from 'react';
import Cell from './Cell';
import PropTypes from "prop-types";

function Card(props){
  return (
    <React.Fragment>
      <div className="card">
        <table>
          <tbody>
            {
              props.cardData.map((row, i) =>(
                <tr key={i}>
                  {
                    row.map((col, j) => 
                      <td key={j} className="cell"><Cell cellValue = {col} displayNumber = {props.displayNumber}/></td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  cardData: PropTypes.array,
  displayNumber: PropTypes.number
};

export default Card;
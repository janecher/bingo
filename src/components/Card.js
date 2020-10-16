import React from 'react';
import Cell from './Cell';
import PropTypes from "prop-types";

function Card(props){
  
  return (
    <React.Fragment>
      <div className="pb-5 d-flex justify-content-center">
        {/* {props.cardData.map((row, index) =>
          <div className="row" key={index}>
            {console.log(row)}
            {
              row.map((col, j) => 
                <div key={j} className="col-1">
                  <Cell cellValue = {col} displayNumber={props.displayNumber}/>
                </div>
              )
            }
          </div>
        )}
      </div> */}
        <table>
          <tbody>
            {
              props.cardData.map((row, i) =>(
                <tr key={i}>
                  {
                    row.map((col, j) => 
                      <td key={j} className="cell"><Cell cellValue = {col} displayNumber={props.displayNumber}/></td>
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
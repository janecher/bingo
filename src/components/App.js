import React, {useState} from 'react';
import NumberToSearch from './NumberToSearch';
import Card from './Card';
import Header from './Header';
import Introduction from './Introduction';

function App(){

  const [board1, setBoard1] = useState([]);
  const [board2, setBoard2] = useState([]);
  const [bingoNumbers, setBingoNumbers] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(null);

  //intervalId = null

  const generateCard = (cols, rows, range) => {
    let array = [];
    for(let i=0; i < rows; i++) {
        array.push([]);
        array[i].push( new Array(cols));
  
        for(let j=0; j < cols; j++) {
            array[i][j] = this.getTheRandomNumber(range);
        }
    }
    return array;
  }

  const handleAnArrayOfSearchNumbers = (range) => {
    let array = [];
    for (let i = 0; i < 20; i++) { 
      let newNum = this.getTheRandomNumber(range);
      while (array.lastIndexOf(newNum) !== -1) {
          newNum = this.getTheRandomNumber(range);
      }
      array.push(newNum);
    }
    return array;
  }

  const getTheRandomNumber = (range) => {
    return Math.floor(Math.random() * range + 1);
  }

  const startTheGame = () =>{
    setBoard1(generateCard(12,3,25));
    setBoard2(generateCard(12,3,25));
    setBingoNumbers(handleAnArrayOfSearchNumbers(25));
    setDisplayNumber(bingoNumbers[0]);
    setShowCards(true);
    //this.interval = setInterval(this.handleDisplayNumber(randomNumbers), 1000); 
    //var timer = this.setIntervalImmediately(() => {this.handleDisplayNumber(this.state.numbers)}, 1000);
  }

  // handleCellClick = (cell_value, number) => {
  //   if(cell_value === number)
  //   {
  //     this.setState({
  //         color: 'green'
  //     });
  //   }
  // }

  // componentDidMount() {
  //   if (this.intervalId != null) {
  //     clearInterval(this.intervalId);
  //     this.intervalId = null;
  //   }
  //   this.intervalId  = this.setIntervalImmediately(() => {this.handleDisplayNumber(this.state.numbers)}, 4000);
  // }

  // setIntervalImmediately = (func, interval) => {
  //   func();
  //   return setInterval(func, interval);
  // }

  // handleDisplayNumber = (arrayOfRandomNumbers) => {
  //   if(this.state.index < arrayOfRandomNumbers.length) {
  //     this.setState({
  //       displayNumber: arrayOfRandomNumbers[this.state.index],
  //       index: this.state.index + 1
  //     });
  //   }
  //   else
  //   {
  //     return;
  //   }
  // };

  let currentComponent = null;

  if(showCards)
  {
    currentComponent = <div>
      <NumberToSearch number={displayNumber}/>
      <Card 
        cardData = {board1}
        displayNumber={displayNumber}
      />
      <Card 
        cardData = {board2}
        displayNumber={displayNumber}
      />
    </div>
  } else {
    currentComponent = <div className="image">
        <img src="../assets/images/bingo.jpg" alt="BINGO"/>
    </div>
  }

  return(
    <React.Fragment>
      <div className="wrapper">
        <Introduction onStartClick={startTheGame}/>
        <div className = "header">
          <Header />
        </div>
        {currentComponent}
      </div>
    </React.Fragment>
  );
}

export default App;

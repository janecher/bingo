import React, {useState} from 'react';
import NumberToSearch from './NumberToSearch';
import Card from './Card';
import Header from './Header';
import Introduction from './Introduction';
import bingoImage from '../assets/images/bingo.jpg';

function App(){
  // const [board1, setBoard1] = useState(generateCard(12,3,25));
  // const [board2, setBoard2] = useState(generateCard(12,3,25));
  // const [bingoNumbers, setBingoNumbers] = useState(handleDisplayNumbers(25));
  const [showCards, setShowCards] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(null);
  const [index, setIndex] = useState(0);

  const generateCard = (cols, rows, range) => {
    let array = [];
    for(let i=0; i < rows; i++) {
        array.push([]);
        array[i].push( new Array(cols));
  
        for(let j=0; j < cols; j++) {
            array[i][j] = getTheRandomNumber(range);
        }
    }
    return array;
  }

  const handleDisplayNumbers = (range) => {
    let array = [];
    for (let i = 0; i < 20; i++) { 
      let newNum = getTheRandomNumber(range);
      while (array.lastIndexOf(newNum) !== -1) {
          newNum = getTheRandomNumber(range);
      }
      array.push(newNum);
    }
    return array;
  }

  const getTheRandomNumber = (range) => {
    return Math.floor(Math.random() * range + 1);
  }

  const board1 = generateCard(12,3,25);
  const board2 = generateCard(12,3,25);
  const bingoNumbers = handleDisplayNumbers(25);

  const startTheGame = () => { 
    // const board1Array = generateCard(12,3,25);
    // const board2Array = generateCard(12,3,25);
    // const bingoNumbersArray = handleDisplayNumbers(25);
    // setBoard1(board1Array);
    // setBoard2(board2Array);
    //setBingoNumbers(bingoNumbersArray);
    setDisplayNumber(bingoNumbers[index]);
    setShowCards(true);
    console.log(bingoNumbers);
    showNumbers(bingoNumbers);
    //this.interval = setInterval(this.handleDisplayNumber(randomNumbers), 1000); 
    //var timer = this.setIntervalImmediately(() => {this.handleDisplayNumber(this.state.numbers)}, 1000);
  }

  const stopTheGame = () => { 
    setShowCards(false);
    setIndex(0);
  }

  const showNumbers = (numbers) => {
    const myShow = setInterval(() => handleDisplayNumber(numbers), 3000);
    setTimeout(() => {
      clearInterval(myShow);
    }, 75000);
  }
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

  const handleDisplayNumber = (arrayOfNumbers) => {
    if(index < arrayOfNumbers.length) {
      const newIndex = index+1;
      setIndex(newIndex);
      setDisplayNumber(arrayOfNumbers[newIndex]);
    }
  };

  let currentComponent = null;

  if(showCards)
  {
    currentComponent = 
    <div className="main">
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
    currentComponent = 
    <div className="image">
        <img src={bingoImage} alt="BINGO"/>
    </div>
  }

  return(
    <React.Fragment>
      <div className="row">
        <div className="col-3 p-3">
          <Introduction onStartClick={startTheGame} onStopClick={stopTheGame} toggleStartStop={showCards}/>
        </div>
        <div className="col-9 p-0">
          <div className="col-12 p-0">
            <Header />
          </div>
          <div className="col-12 p-0">
            {currentComponent}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

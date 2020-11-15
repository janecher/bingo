import React from 'react';
import NumberToSearch from './NumberToSearch';
import Card from './Card';
import Header from './Header';
import Introduction from './Introduction';
import bingoImage from '../assets/images/bingo.jpg';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstCard: [],
      secondCard: [],
      bingoNumbers: [],
      showCards: false,
      displayNumber: null,
      index: 0
    }
  }

  generateCard = (cols, rows, range) => {
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

  componentDidMount(){
    this.setState({
      firstCard: this.generateCard(12,3,25),
      secondCard: this.generateCard(12,3,25),
      bingoNumbers: this.handleDisplayNumbers(25)
    });
  }

  handleDisplayNumbers = (range) => {
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

  getTheRandomNumber = (range) => {
    return Math.floor(Math.random() * range + 1);
  }

  startTheGame = () => { 
    this.setState({
      showCards: true,
      displayNumber: this.state.bingoNumbers[this.state.index]
    });
  }

  stopTheGame = () => { 
    this.setState({
      showCards: false,
      index: 0
    });
  }

  handleNextNumber = () => {
    const newIndex = this.state.index + 1;
    if(newIndex < this.state.bingoNumbers.length) {
      this.setState({ 
        index: newIndex,
        displayNumber: this.state.bingoNumbers[newIndex]
      });
    }
  };

  render() {
    let currentComponent = null;

    if (this.state.showCards) {
      currentComponent = 
      <div className="main">
        <NumberToSearch number={this.state.displayNumber} 
                        onNextNumber={this.handleNextNumber}
        />
        <Card 
          cardData = {this.state.firstCard}
          displayNumber={this.state.displayNumber}
        />
        <Card 
          cardData = {this.state.secondCard}
          displayNumber={this.state.displayNumber}
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
            <Introduction onStartClick={this.startTheGame} onStopClick={this.stopTheGame} toggleStartStop={this.state.showCards}/>
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
    )
  }
}

export default App;

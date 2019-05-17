import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import PlayerSide from './PlayerSide';
import ComputerSide from './ComputerSide';
import Button from './Button';

const gameImages = [
  { "name": "rock", "url": "https://i.imgur.com/dEEEx4G.png" },
  { "name": "paper", "url": "https://i.imgur.com/1gxWcZy.png" },
  { "name": "scissors", "url": "https://i.imgur.com/XfMevXT.png" },
]

const randomImage = gameImages[Math.floor(Math.random()*gameImages.length)];
const initialState = { selectedSymbol: {}, isDelayElapsed: false };

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState  
  }

  onMarkAsClicked = (clickedSymbol) => {
    this.setState(
      () => ({ selectedSymbol: clickedSymbol }),
      () => {
        setTimeout(() => {
          this.setState({ isDelayElapsed: true })
        }, 600)
      }
    );
  }

  resetGame = () => {
    this.setState(initialState);
  }

  render () {
  const checkWinner = () => {
    if (this.state.selectedSymbol.name === 'scissors' && randomImage.name === 'paper') {
      return "Player 1 wins!";
    }
    if (this.state.selectedSymbol.name === 'paper' && randomImage.name === 'rock') {
      return "Player 1 wins!";
    }
    if (this.state.selectedSymbol.name === 'rock' && randomImage.name === 'scissors') {
      return "Player 1 wins!";
    }
    if (this.state.selectedSymbol.name === randomImage.name){
      return "Draw!";
    }
    if (this.state.selectedSymbol.name === 'scissors' && randomImage.name === 'rock') {
      return "Computer won! Try Again!";
    }
    if (this.state.selectedSymbol.name === 'paper' && randomImage.name === 'scissors') {
      return "Computer won! Try Again!";
    }
    if (this.state.selectedSymbol.name === 'rock' && randomImage.name === 'paper') {
      return "Computer won! Try Again!";
    }
  }
    return (
    <Fragment>
      <Title text="Make your choice!" />
      {
          this.state.selectedSymbol.name && this.state.isDelayElapsed && (
        <p>{checkWinner()}</p>
        )
      }
      <div className="row">
        <div className="column">
          <PlayerSide images={gameImages} handleClickSymbol={this.onMarkAsClicked} selectedSymbol={this.state.selectedSymbol}/>
        </div>
        {
          this.state.selectedSymbol.name && this.state.isDelayElapsed && (
            <div className="column">
                <ComputerSide images={gameImages} handleClickSymbol={() => {}} selectedSymbol={randomImage}/>
            </div>
          )
        }
      </div>

      <Button checkWinner={this.resetGame} text="Play Again" />
      <Link to="/"><Button text="Back to Home" /></Link>
    </Fragment> 
 )};
}

export default Game;

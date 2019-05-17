import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const HowToPlay = () => {
  return (
    <div>
      <h1>Game Rules</h1>
      <p>The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:</p>
        <ul>
          <li> Rock wins against scissors.</li>
          <li> Scissors win against paper.</li>
          <li> Paper wins against rock.</li>
        </ul>
        <Link to="/"><Button text="Back to Home" /></Link>
    </div>
  );
}

export default HowToPlay;

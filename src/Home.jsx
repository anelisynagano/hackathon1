import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Button from './Button';

const Home = () => {
  return (
    <Fragment>
      <Title text="Rock, Paper, Scissors" />
      <Link to="/game"><Button text="Start Game" /></Link>
      <Link to="/howto"><Button text="How to Play" /></Link>
      <Link to="/about"><Button text="About" /></Link>
    </Fragment>
  );
}

export default Home;

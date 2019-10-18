import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>This project is based on a 24 hours hackathon with the theme <b>Game</b>, for Wild Code School.</p>
      <p>Please click below to visit my Linkedin profile!</p>
      <a href="https://www.linkedin.com/in/anelisynagano" target="_blank" rel="noopener noreferrer"><h2>Anelisy Nagano</h2></a>
     
      <Link to="/"><Button text="Back to Home" /></Link>
    </div>
  );
}

export default About;

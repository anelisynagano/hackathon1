import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import HowToPlay from './HowToPlay';
import About from './About';
import Game from './Game';

const App = () => {
  return (
    <div className="page-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowToPlay} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'react';

import Home from './Components/Home/Home';
import Weather from './Components/Weather/Weather';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          { " | " }
          <Link to="/weather-search">Hair Day?</Link>
        </nav>



        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weather-search" component={Weather} />
        </Switch>
      </div>
    );
  }
}

export default App;

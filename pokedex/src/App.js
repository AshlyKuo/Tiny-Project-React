import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
    <div className="App">
      <Pokegame />
    </div>
  );
  };
}

export default App;

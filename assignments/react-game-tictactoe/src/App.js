import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="gameHeader">My Tuyen's Tic Tac Toe Game</h1>

      <Board />
    </div>
  );
}

export default App;

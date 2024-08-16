import Board from './components/Board';
import Square from './components/Square';
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

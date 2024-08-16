import React from 'react';
import { useState } from 'react';

import Square from './Square';
import CheckWin from './CheckWin';
import './Board.css';


export default function Board() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    //if there is a winner OR square is filled, do nothing
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = currentPlayer;
    setSquares(nextSquares);
    advanceCurrentPlayer();
    //console.log("clicked");
  }

  function advanceCurrentPlayer() {
    //update currentPlayer
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  }
  
  const winner = CheckWin(squares);
  let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + currentPlayer;
    }


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

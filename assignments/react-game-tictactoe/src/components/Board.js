import React from 'react';
import { useState } from 'react';
import './Board.css';
import Square from './Square';

function Board() {
  return (
  <>
      <div className="board-row">
        <Square value="1"/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
  </>
);
};

export default Board;
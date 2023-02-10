import React from "react";
import Square from './Square'


const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;


//mapping over each square and then passing the Square Component along with the index
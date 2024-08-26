import React from 'react';
import Square from './Square';
import './index.css'; 

interface BoardProps {
  board: ('X' | 'O' | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => (
  <div className="board">
    {board.map((value, index) => (
      <Square
        key={index}
        value={value}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

export default Board;

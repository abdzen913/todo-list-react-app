import React from 'react';
import './index.css'; 

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;

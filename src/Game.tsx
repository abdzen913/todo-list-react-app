
import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, isDraw, createEmptyBoard, Player } from './utils/gameLogic';

const Game: React.FC = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const draw = !winner && isDraw(board);
  const currentPlayer: Player | null = isXNext ? 'X' : 'O';
  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleNewGame = () => {
    setBoard(createEmptyBoard());
    setIsXNext(true);
  };

  return (
    <><div>
      <div>
        {winner ? `Winner: ${winner}` : draw ? 'Draw!' : `Next player: ${currentPlayer}`}
      </div>
      <Board board={board} onClick={handleClick} />
    </div><button className='btn' onClick={handleNewGame}>New Game</button></>

  );
};

export default Game;


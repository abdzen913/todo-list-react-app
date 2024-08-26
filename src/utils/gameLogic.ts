
export type Player = 'X' | 'O';
export type Board = (Player | null)[];

export const calculateWinner = (board: Board): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export const isDraw = (board: Board): boolean => {
  return board.every(square => square !== null);
};

export const createEmptyBoard = (): Board => Array(9).fill(null);
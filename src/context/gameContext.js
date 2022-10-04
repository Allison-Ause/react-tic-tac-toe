import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
    { space: 9, content: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('');

  const checkConditions = () => {
    if (!active) return;
    if (
      //horizontal
      (board[0].content === board[1].content &&
        board[0].content === board[2].content &&
        board[0].content !== '') ||
      (board[3].content === board[4].content &&
        board[3].content === board[5].content &&
        board[3].content !== '') ||
      (board[6].content === board[7].content &&
        board[6].content === board[8].content &&
        board[6].content !== '') ||
      //diagonal
      (board[0].content === board[4].content &&
        board[0].content === board[8].content &&
        board[0].content !== '') ||
      (board[2].content === board[4].content &&
        board[2].content === board[6].content &&
        board[2].content !== '') ||
      //vertical
      (board[0].content === board[3].content &&
        board[0].content === board[6].content &&
        board[0].content !== '') ||
      (board[1].content === board[4].content &&
        board[1].content === board[7].content &&
        board[1].content !== '') ||
      (board[2].content === board[5].content &&
        board[2].content === board[8].content &&
        board[2].content !== '')
    ) {
      setActive(false);
      if (currentPlayer !== 'X') {
        setGameMessage('Congrats, X! You did it!');
      } else {
        setGameMessage('Way to go, O! You won!');
      }
    } else if (!board.filter((square) => square.content === '').length) {
      setActive(false);
      setGameMessage("Shucks! It's a Cat's Game.");
    }
  };

  const takeTurn = ({ space, content }) => {
    if (content === '' && active === true) {
      //duplicate current board (local state)
      const copiedBoard = board.map((square) =>
        square.space === space ? { ...square, content: currentPlayer } : { ...square }
      );
      // set board state to the copied board
      setBoard(copiedBoard);

      if (currentPlayer === 'X') {
        setCurrentPlayer('O');
        setGameMessage('Go, O!');
      } else {
        setCurrentPlayer('X');
        setGameMessage('Your Turn, X!');
      }
    }
  };

  const resetGame = () => {
    setBoard([
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
      { space: 9, content: '' },
    ]);
    setActive(true);
    setGameMessage('Play Again!');
    setCurrentPlayer('X');
  };

  checkConditions();

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        board,
        setBoard,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        takeTurn,
        checkConditions,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be contained within a GameContextProvider');
  }
  return context;
};

export { GameContextProvider, useGame };

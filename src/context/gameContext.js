import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  //fill with state = useState();
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
  const [active, setActive] = useState(true); //is there an active game currently going on? For reset button check
  const [gameMessage, setGameMessage] = useState('');

  console.log('0', board[0].content);
  console.log('1', board[1].content);
  console.log('2', board[2].content);

  const checkConditions = () => {
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
    }
    console.log('active', active);
  };

  const takeTurn = ({ space, content }) => {
    if (content === '' && active === true) {
      setBoard((prevState) =>
        prevState.map((square) =>
          square.space === space ? { ...square, content: currentPlayer } : square
        )
      );
      if (currentPlayer === 'X') {
        setCurrentPlayer('O');
      } else setCurrentPlayer('X');
    }
  };

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

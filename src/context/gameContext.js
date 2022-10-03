import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  //fill with state = useState();
  const [board, setBoard] = useState(
    { space: 1, content: 'w' },
    { space: 2, content: 'o' },
    { space: 3, content: 'r' },
    { space: 4, content: 'k' },
    { space: 5, content: 'i' },
    { space: 6, content: 'n' },
    { space: 7, content: 'g' },
    { space: 8, content: '!' },
    { space: 9, content: '!' }
  );
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true); //is there an active game currently going on? For reset button check
  const [gameMessage, setGameMessage] = useState('');

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

import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  //fill with state = useState();
  const [currentPlayer, setCurrentPlayer] = useState();

  return (
    <GameContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
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

import { createContext, useContext, useState } from 'react';



const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [turn, setTurn] = useState('');

  return <GameContext.Provider value ={{ turn, setTurn }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
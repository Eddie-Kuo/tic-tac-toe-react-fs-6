import { createContext, useContext, useState } from 'react';



const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn X');
  const [board, setBoard] = useState(Array(9).fill(''));
  console.log(board);

  // set default person to start first is X
  // show corresponding game message 
  // set state to determine which space is still active to click

  const setTurn = (index) => {
    if (board[index] === '') {
      setBoard(prevState => prevState.map((empty, ind) => ind === index ? currentPlayer : empty));
      setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
      setGameMessage(`Your turn ${currentPlayer}`);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
  };



  // map out all the win conditions in an array or arrays?

  return <GameContext.Provider value ={{ currentPlayer, setCurrentPlayer, setTurn, board, gameMessage, resetGame }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
import { createContext, useContext, useState } from 'react';



const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn X');
  const [board, setBoard] = useState(Array(9).fill(''));
//   console.log(board);

  // set default person to start first is X
  // show corresponding game message 
  // set state to determine which space is still active to click

  const setTurn = (index) => {
    if (board[index] === '' && active) {
      setBoard(prevState => prevState.map((empty, ind) => ind === index ? currentPlayer : empty));
      setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
      setGameMessage(`Your turn ${currentPlayer === 'X' ? 'O' : 'X'}`);
    }
  };

  const winConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

//   const winningGame = () => {
//     winConditions.map(condition => (
//        if (condition[0] === condition[1] && condition[1] === condition[2]) {
//            return
//        } else {}
//     ));
//   };

  const winCheck = () => {
    if (!active) return null;
    let fullBoard = false;
    if (!board.includes('')) fullBoard = true;
    let winner = null;
    // set full board value to false starting out 
    // if board doesn't have any empty spaces, set full board to true -> set message to cats game
    // for each win condition map through each one to see if it matches the selected pieces on the board filtered by block and index
    //reduce method takes array and index as 2 other arguments 
    for (const winCond of winConditions) {
    //   console.log('wincond', winConditions);
      let checkedRow = board.filter((block, index) => winCond.includes(index));
      // console.log('checkedRow', checkedRow);
        // need an array that returns a win conditioned array with the matching index of what each block is placed on the board 
      if (checkedRow.includes('')) continue;
        // keep going until the whole array is filled 
      winner = checkedRow.reduce((prev, curr) => {
        // console.log('winner', winner);
        if (prev === curr) {
          // console.log('prev', prev);
          // console.log('curr', curr);
          return prev;
        } else {
          return null;
        }});
      if (winner) break;
    }
    //   if (checkedRow[0] === checkedRow[1] && checkedRow[2]) {
    //     winner = checkedRow[0];
    //   }
    //   winner = checkedRow.reduce((array, index) => (
    //     //   if (array === index )
    //     console.log('winner', array),
    //     console.log('index!!!!!!!!', index)
        //   console.log('index', index)
    //   ));
      // index arg displays the index of the array being reduced
      // array is the array being looped
      // return the array that wins
    //   if (winner) break;
      //if winner becomes true, stop the loop
    if (winner) {
      setActive(false);
      setGameMessage(`${winner} has won`);
    } else if (fullBoard) {
      setActive(false);
      setGameMessage(`It's a cats game!`);
    }
      
    //   console.log('winCondNew', winCond);
    //   console.log('winner', winner);

  };


// if there is a full board then set the message to cats game
// .filter the board and check if it matches the winConditions
// .reduce can take 2 other arguments - array and index 

  winCheck();

  const resetGame = () => {
    setBoard(Array(9).fill(''));
  };

  // map out all the win conditions in an array or arrays?

  return <GameContext.Provider value ={{ currentPlayer, setCurrentPlayer, setTurn, board, gameMessage, resetGame, winCheck }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
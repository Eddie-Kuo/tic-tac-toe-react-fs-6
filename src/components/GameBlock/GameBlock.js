import React from 'react';
import { useGameContext } from '../../context/GameContext';
import './GameBlock.css';

export default function GameBlock({ block, index }) {

  const { setTurn, board } = useGameContext();
  const handleClick = () => {
    setTurn(index);
    console.log('index', index);
    console.log('index 2', board[2]);
  };

  return (
    <button className='gameblock' 
      onClick={handleClick}>{block}</button>
  );
}
// should render a block with the correct symbol based on who's turn it is
//need to pass in the player state on who's turn it is to display the correct symbol within the boxes

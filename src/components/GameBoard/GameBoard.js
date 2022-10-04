import React from 'react';
import GameBlock from '../GameBlock/GameBlock';
import './GameBoard.css';

export default function GameBoard() {
  return (
    <div className='gameboard'>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
      <GameBlock/>
    </div>
  );
}

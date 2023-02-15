import React from 'react';
import { useGameContext } from '../../context/GameContext';
import GameBlock from '../GameBlock/GameBlock';
import './GameBoard.css';

export default function GameBoard() {

  const { board } = useGameContext();
  // const board = [
  //   {
  //     position: 0,
  //     value: ''
  //   },
  //   {
  //     position: 1,
  //     value: ''
  //   },
  //   {
  //     position: 2,
  //     value: ''
  //   },
  //   {
  //     position: 3,
  //     value: ''
  //   },
  //   {
  //     position: 4,
  //     value: ''
  //   },
  //   {
  //     position: 5,
  //     value: ''
  //   },
  //   {
  //     position: 6,
  //     value: ''
  //   },
  //   {
  //     position: 7,
  //     value: ''
  //   },
  //   {
  //     position: 8,
  //     value: ''
  //   },
  // ];

  return (
    <div className='gameboard'>
      {board.map((block, index) => {
        return <GameBlock key={index} block={block} index={index}/>;
      })}
    </div>
  );
}

// write functions to check if the game is over every move 
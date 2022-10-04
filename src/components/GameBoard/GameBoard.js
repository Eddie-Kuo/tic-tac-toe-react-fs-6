import React from 'react';
import GameBlock from '../GameBlock/GameBlock';
import './GameBoard.css';

export default function GameBoard() {

  const board = [
    {
      position: 0,
      value: ''
    },
    {
      position: 1,
      value: ''
    },
    {
      position: 2,
      value: ''
    },
    {
      position: 3,
      value: ''
    },
    {
      position: 4,
      value: ''
    },
    {
      position: 5,
      value: ''
    },
    {
      position: 6,
      value: ''
    },
    {
      position: 7,
      value: ''
    },
    {
      position: 8,
      value: ''
    },
  ];

  return (
    <div className='gameboard'>
      {board.map(block => {
        return <GameBlock key={block.position} block={block} />;
      })}

    </div>
  );
}

// create and array of objects, map out the array and return a component for each object of the array 
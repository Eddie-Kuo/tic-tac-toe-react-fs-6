import React from 'react';
import './GameBlock.css';

export default function GameBlock({ block }) {


  const handleClick = () => {
    console.log(`${block.position} is clicked`);
  };

  return (
    <button className='gameblock' onClick={handleClick} >GameBlock</button>
  );
}

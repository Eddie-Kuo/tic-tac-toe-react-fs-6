import React from 'react';
import { useGameContext } from '../context/GameContext';

export default function PlayerTurn() {

  const { gameMessage } = useGameContext();

  const { resetGame } = useGameContext();
  return (
    <div>
      <h3>{gameMessage}</h3>
      <button onClick={resetGame}>Restart game</button>
    </div>
  );
}

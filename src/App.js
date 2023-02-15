
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';
import PlayerTurn from './components/PlayerTurn';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <PlayerTurn/>
        <GameBoard/>
      </main>
    </div>
  );
}

export default App;

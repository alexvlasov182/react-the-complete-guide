import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;

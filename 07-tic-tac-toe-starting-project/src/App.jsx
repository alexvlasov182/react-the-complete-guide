import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </>
  );
}

export default App;

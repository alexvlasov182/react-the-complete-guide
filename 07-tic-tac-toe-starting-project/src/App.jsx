import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        Game Board
      </div>
    </>
  );
}

export default App;

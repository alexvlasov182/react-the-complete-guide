import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(params) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X",
    );
    setGameTurns((prevTuns) => {
      let currentPlayer = "X";

      if (prevTuns.length > 0 && prevTuns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTuns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTuns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;

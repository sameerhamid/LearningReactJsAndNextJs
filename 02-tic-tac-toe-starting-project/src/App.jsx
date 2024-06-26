import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState("X")

  const handleSelectSquare = () => {
    setActivePlayer(preveActivePlayer => preveActivePlayer === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isAcitve={activePlayer === 'X'} />
          <Player initialName="Player 1" symbol="O" isAcitve={activePlayer === 'O'} />

        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

    </main>
  )
}

export default App

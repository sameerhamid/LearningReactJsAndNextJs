import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"


function derivedAcitvePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {

  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = derivedAcitvePlayer(gameTurns)

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer(preveActivePlayer => preveActivePlayer === "X" ? "O" : "X")
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedAcitvePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
      ]

      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isAcitve={activePlayer === 'X'} />
          <Player initialName="Player 1" symbol="O" isAcitve={activePlayer === 'O'} />

        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App

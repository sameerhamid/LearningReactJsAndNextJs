import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from './winning-combinations'


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// helper fuction to get the active game player

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


  let gameBoard = initialGameBoard

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  for (const combination of WINNING_COMBINATIONS) {

  }

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
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App

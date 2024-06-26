import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver"


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

  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = derivedAcitvePlayer(gameTurns)


  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner
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

  // called rematch button call on game over component

  const handleRematchClick = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isAcitve={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 1" symbol="O" isAcitve={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />

        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematchClick} />}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App

import React, { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            newGameBoard[rowIndex][colIndex] = 'X'
            return newGameBoard
        })


    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;

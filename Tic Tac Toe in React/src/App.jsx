import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].Player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard , players) {
  let winner;

  for (const conbination of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameBoard[conbination[0].row][conbination[0].column];
    let secondSquareSymbol =
      gameBoard[conbination[1].row][conbination[1].column];
    let thirdSquareSymbol =
      gameBoard[conbination[2].row][conbination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, Player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = Player;
  }
  return gameBoard
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setgameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handelSelectSquare(rowIndex, colIndex) {
    setgameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, Player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handelRestart() {
    setgameTurns([]);
  }

  function handelPlayerChangeName(symbol, newName) {
    setPlayers((prevPlayer) => {
      return { ...prevPlayer, [symbol]: newName };
    });
  }

  return (
    <div>
      <div className="bg-[#242014] text-white mx-auto block w-2/5 rounded py-7 mb-5">
        <ol className="font-lg flex justify-between mx-20 py-5">
          <Player
            initialName={PLAYERS.X}
            Symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handelPlayerChangeName}
          />
          <Player
            initialName={PLAYERS.O}
            Symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handelPlayerChangeName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver onRestart={handelRestart} winner={winner} />
        )}
        <div className="flex justify-center mt-5">
          <GameBoard onSelectSquare={handelSelectSquare} board={gameBoard} />
        </div>
      </div>
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;

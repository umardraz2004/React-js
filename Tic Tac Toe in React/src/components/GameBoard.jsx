const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol className="w-[62%]">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-between pb-5">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="h-[100px]">
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  className="w-[100px] h-[100%] bg-[#9b9776] text-7xl hover:bg-[#9b977693] transition-colors duration-500"
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

import React, { useState } from "react";

const LiveGamingView = ({ figureThatStarts }) => {
    const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
    const [isXTurn, setIsXTurn] = useState(figureThatStarts === "x");
    const [winner, setWinner] = useState(null);

    const checkWinner = (currentGrid) => {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of combos) {
            const [a, b, c] = combo;
            if (currentGrid[a] && currentGrid[a] === currentGrid[b] && currentGrid[a] === currentGrid[c]) {
                return currentGrid[a];
            }
        }

        if (!currentGrid.includes("")) {
            return "draw";
        }

        return null;
    };

    const handleCellClick = (index) => {
        if (winner || grid[index] !== "") return;

        const updatedGrid = [...grid];
        updatedGrid[index] = isXTurn ? "x" : "o";

        const result = checkWinner(updatedGrid);
        if (result) {
            setGrid(updatedGrid);
            setWinner(result);
        } else {
            setGrid(updatedGrid);
            setIsXTurn(!isXTurn);
        }
    };

    const resetGame = () => {
        setGrid(["", "", "", "", "", "", "", "", ""]);
        setIsXTurn(figureThatStarts === "x");
        setWinner(null);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light py-5">
            {/* Game status */}
            <div className="text-center mb-4">
                <h2>
                    {winner
                        ? winner === "draw"
                            ? "It's a draw!"
                            : `Winner is ${winner.toUpperCase()}!`
                        : `It's ${isXTurn ? "X" : "O"}'s turn`}
                </h2>
                <button className="btn btn-outline-primary mt-3" onClick={resetGame}>
                    Reset Game
                </button>
            </div>

            {/* Grid */}
            <div className="bg-white border rounded shadow-sm p-2" style={{ width: "360px" }}>
                {[0, 3, 6].map((startRow) => (
                    <div key={startRow} className="row g-0">
                        {[0, 1, 2].map((colOffset) => {
                            const index = startRow + colOffset;
                            return (
                                <div
                                    key={index}
                                    className="col-4 border d-flex justify-content-center align-items-center"
                                    style={{ height: "120px", cursor: "pointer", fontSize: "3rem" }}
                                    onClick={() => handleCellClick(index)}
                                >
                                    {grid[index]}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveGamingView;
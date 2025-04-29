import React, { useState } from "react";
import LiveGamingView from "./LiveGamingView.jsx";

const PlayerSelectView = () => {
    const [secondView, setSecondView] = useState(false);
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");
    const [startingFigure, setStartingFigure] = useState("");

    const handlePlayerOneName = (e) => {
        setPlayerOneName(e.target.value);
    };

    const handlePlayerTwoName = (e) => {
        setPlayerTwoName(e.target.value);
    };

    const handleCrossFigure = (e) => {
        if (playerOneName.length > 0 && playerTwoName.length > 0) {
            if (e.target.classList.contains("figure-cross")) {
                setStartingFigure("x");
                setSecondView(true);
            }
            if (e.target.classList.contains("figure-circle")) {
                setStartingFigure("o");
                setSecondView(true);
            }
        } else {
            //console.log("Enter both names");
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
            {!secondView && (
                <div className="text-center p-4 bg-white border rounded shadow-sm w-100" style={{ maxWidth: "500px" }}>
                    {/* Title */}
                    <h3 className="mb-4 text-primary">Pick a weapon</h3>

                    {/* Name Inputs */}
                    <div className="mb-3">
                        <input
                            value={playerOneName}
                            onChange={handlePlayerOneName}
                            type="text"
                            placeholder="Player 1 username"
                            className="form-control mb-2"
                        />

                        <input
                            value={playerTwoName}
                            onChange={handlePlayerTwoName}
                            type="text"
                            placeholder="Player 2 username"
                            className="form-control"
                        />
                    </div>

                    {/* X/O Buttons */}
                    <div className="d-flex justify-content-between gap-3 mt-4">
                        <button
                            onClick={handleCrossFigure}
                            type="button"
                            className="btn btn-outline-warning figure-cross fs-1 flex-grow-1 py-3"
                        >
                            X
                        </button>
                        <button
                            onClick={handleCrossFigure}
                            type="button"
                            className="btn btn-outline-primary figure-circle fs-1 flex-grow-1 py-3"
                        >
                            O
                        </button>
                    </div>
                </div>
            )}

            {/* Game View */}
            {secondView && (
                <LiveGamingView
                    firstPlayerName={playerOneName}
                    secondPlayerName={playerTwoName}
                    figureThatStarts={startingFigure}
                />
            )}
        </div>
    );
};

export default PlayerSelectView;
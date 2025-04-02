import React, { useState } from "react";


const PlayerSelectView = () => {

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerOneFigure, setPlayerOneFigure] = useState("")

    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerTwoFigure, setPlayerTwoFigure] = useState("")

    const handlePlayerTwoName = (e) => {
        setPlayerTwoName(e.target.value)
        console.log(playerTwoName)
    }

    const handleCrossFigure = (e) => {
        console.log(e.target)
    }

    const handleCircleFigure = (e) => {
        console.log(e.target)
    }


    return (
        <div>
            <form action="">
                <label htmlFor="">Player 1</label>
                <input onChange={(e) => setPlayerOneName(e.target.value)} type="text" placeholder="Player 1 name here" />
                <br />
                <label htmlFor="">Player 2</label>
                <input onChange={(e) => handlePlayerTwoName(e)} type="text" placeholder="Player 2 name here" />
            </form>

            {/* Figures to select */}
            <div onClick={(e) => handleCrossFigure(e)} className="figure cross">
                x
            </div>
            <div onClick={(e) => handleCircleFigure(e)} className="figure circle">
                o
            </div>

        </div>
    )
}

export default PlayerSelectView
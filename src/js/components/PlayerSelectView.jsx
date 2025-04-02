import React, {useState} from "react";


const PlayerSelectView = ()=>{

    const [playerOneName,setPlayerOneName] = useState("")

    const [playerTwoName,setPlayerTwoName] = useState("")

    const handlePlayerTwoName = (e)=>{
        setPlayerOneName(e.target.value)
        console.log(playerTwoName)
    }


    return (
        <div>
            <form action="">
                <label htmlFor="">Player 1</label>
                <input onChange={(e)=setPlayerOneName(e.target.value)} type="text" placeholder="Player 1 name here"/>
                <br />
                <label htmlFor="">Player 2</label>
                <input onChange={(e)=>handlePlayerTwoName(e)} type="text" palceholer="Player 2 name here"/>
            </form>

            {/* Figures to select */}
            <div>
                x
            </div>
            <div>
                o
            </div>
        </div>
    )
}

export default PlayerSelectView
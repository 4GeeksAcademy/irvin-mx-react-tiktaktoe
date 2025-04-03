import React, {useState} from "react"


//Component styles
const figureXStyles = {
    backgroundColor: "red"
}

import styles from "./LiveGamingView.module.css"


//Component styles
// import style from "./LiveGamingView.css"
const LiveGamingView = () => {

    const [figure,setFigure] = useState(false)

    const [grid,setGrid] = useState([
        ["","",""],
        ["","",""],
        ["","",""]
    ])
    // grid.forEach((item,index,array)=>{

    // })
    const xHandler = (e)=> {
        console.log(e.target.id)
        if(e.target.id == 1){
            //setGrid()
        }
        //setFigure(!figure)
    }
    return (
        <div className="bg-secondary d-flex flex-column justify-content-center align-items-center">
            <div>Its x/o turn</div>
            <div className="container text-center">
                <div className="row">
                    <div onClick={(e)=>xHandler(e)} className={figure===true? "col": `col ${styles.figure}`} id="1">
                        {
                            grid[0][0] !== "" ? grid[0][0]   : <p>nothing here</p> 
                        }
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="2">
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="3">
                        Column
                    </div>
                </div>

                <div className="row">
                    <div onClick={(e)=>xHandler(e)} className="col" id="4">
                        Column
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="5">
                        Column
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="6">
                        Column
                    </div>
                </div>

                <div className="row">
                    <div onClick={(e)=>xHandler(e)} className="col" id="7">
                        Column
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="8">
                        Column
                    </div>
                    <div onClick={(e)=>xHandler(e)} className="col" id="9">
                        Column
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveGamingView
import React from "react"
import "./header.css"

function Header (props) {
    console.log(props);

    return(
    <div className="header">
        <div className="title">NBA Player Clicky Game</div>
        <div className="scores">
            Current Score: {props.current_score} | High Score: {props.high_score}
        </div>
    </div>
    )
}


export default Header;
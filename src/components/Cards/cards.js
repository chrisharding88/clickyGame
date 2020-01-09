import React from "react"
import "./cards.css"

function Cards (props) {
    return(
    <div className="nbaCards">
        <div className="img-container" onClick={() => props.onImageClick()}>
            <img alt={props.player} src={props.image} className="nbaImage"></img>
        </div>
    </div>
    )
}

export default Cards;
import React from "react"
import "./cards.css"

function Cards (props) {
    console.log(props);

    return(
    <div className="nbaCards" onClick={() => props.clickCount(props.pic_id)}>
        <div className="img-container">
            <img alt={props.player} src={props.image}></img>
        </div>
    </div>
    )
}

export default Cards;
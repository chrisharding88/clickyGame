import React from "react"

function Cards (props) {
    console.log(props);

    return(
    <div className="nbaCards" onClick={() => props.clickCount(props.pic_id)}>
        <div className="container">
            <img alt={props.name} src={props.image}></img>
        </div>
    </div>
    )
}

export default Cards;
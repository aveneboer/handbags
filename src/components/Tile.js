import React from "react";
function Tile(props) {
    return (
        <section>
            <img src={props.image} alt={props.name}/>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </section>
    )
}

export default Tile;
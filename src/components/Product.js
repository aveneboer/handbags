import React from "react";
function Product(props) {
    return (
        <article>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <h4>{props.price}</h4>
            <span>{props.description}</span>
        </article>
    )
}

export default Product;
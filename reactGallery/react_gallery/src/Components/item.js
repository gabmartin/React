import React from "react";
import Container from "./container";

const Item = ({searchTerm}) => {
    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <Container searchTerm={searchTerm}></Container>
        </div>
    )
}

export default Item;
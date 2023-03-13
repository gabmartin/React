import React from "react";
import { useContext, useEffect } from "react";
import Gallery from "./gallery";
import Loader from "./loader";
import { PhotoContext } from "../context/PhotoContext";

const Container = ({searchTerm}) => {
    const {images, loading, runSearch} = useContext(PhotoContext);
    useEffect(() => {
        runSearch(searchTerm);
    },[searchTerm]);
    return (
        <div className="photo-container">
            {loading ? <Loader></Loader> : <Gallery data={images}></Gallery>}
        </div>
    )
}

export default Container;
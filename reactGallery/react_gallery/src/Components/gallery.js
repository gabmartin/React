import React from "react";
import Image from "./image"
import NoImages from "./noImages"

const Gallery = (props) => {
    const results = props.data;
    let images;
    let noImages;

    if(results.length > 0){
        images = results.map(image => {
            let farm = images.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflicker.com/${server}/${id}_${secret}_m.jpg`;
            return (
                <Image url={url} key={id} alt={title}></Image>
            )
        })
    }else{
        noImages= <NoImages></NoImages>
    }
    return (
        <div>
            <ul>
                {images}
            </ul>
            {noImages}
        </div>
    )
}

export default Gallery;
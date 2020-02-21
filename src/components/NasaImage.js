import React from 'react';

const NasaImage = props => {
    return (
        <>
        <img className="image" src={props.photo.url}/>

        <h1>{props.photo.title}</h1>

        <p className="desc">{props.photo.explanation}</p>

    <p>{props.photo.copyright}, {props.photo.date}</p>


        </>
    );
};

export default NasaImage;
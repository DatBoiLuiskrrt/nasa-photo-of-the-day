import React from "react";

const PicCard = (props) => {
    return (
        <div key={props.date}>
            <h2>Title: {props.title}</h2>
            <h2>{props.description}</h2>
            <img alt="Nasa foto of the day" src={props.imgUrl}/>
        </div>
    );
};

export default PicCard;
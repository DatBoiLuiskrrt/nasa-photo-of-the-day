import React from "react";

const NasaCard = (props) => {
    // console.log("this is props in nasacard " , props);
    return (
        <div>
        <h2> {props.data.title} </h2>
        <img src={props.data.hdurl}></img>
        <p>{props.data.explanation}</p>
       </div>
     
        
    );
};
export default NasaCard;

import React, {useState, useEffect} from "react";
import NasaCard from "../components/NasaCard";
import axios from "axios";

function NasaList() {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios
        .get(
            "https://api.nasa.gov/planetary/apod?api_key=4Yd5qgMpTELhurBORRMQZXYNOVnAl4BFRwXFXvGa"
        )
        .then(response => {
            console.log("this is props in NasaList" , response.data);
            
            setPhoto([response.data]);

            
            
        })
        .catch(error => {
            console.log("La informacion no fue regresada lmao ", error
            );
        });
    }, []);
    return (
        
            <div>
            {photo.map(myVerga => {
                return (
                    <NasaCard data={myVerga}/>
                    // <NasaCard caca={photo}/>
                )
            })}


            </div>
        
    );
}
export default NasaList; 
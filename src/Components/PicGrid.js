import React,{useState, useEffect} from "react";
import PicCard from "./PicCard";
import axios from "axios";

export default function PicGrid() {
    const [data, setPics] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=y9Ca5HdXcCgVsBSXq1oTaG1gtCz8Re6D52pbnq3K`)
        .then(response => {
          console.log(response.data);
          setPics(response.data);
        })
        .catch(error => {
          console.log("sorry no picture", error);
        });
    }, []);
    return (
        <div>
           {Object.entries(data).map((key,value) => {
               return (
                   <PicCard 
                   key={data}
                   title={data.title}
                   description={data.explanation}
                   imgUrl={data.hdurl}

                   />
               )
           })}
        </div>
    );
}
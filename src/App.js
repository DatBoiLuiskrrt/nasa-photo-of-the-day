import React from "react";
import "./App.css";
import NasaList from "../src/components/NasaList";
import NasaCard from "../src/components/NasaCard";

function App() {
  return (
    <div className="App">
      <p>
        Nasa Photo of the Day! 
        <NasaList/>
        
      </p>
    </div>
  );
}

export default App;

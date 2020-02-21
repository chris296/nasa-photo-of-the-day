import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaImage from "./components/NasaImage";

function App() {
  const [photo, setPhoto] = useState({});

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=4zBamL4obmRzaKd3bp81sdD0Y1qQLg2CnPd8ev4j')
        .then(response => {
            console.log(response.data);
            setPhoto(response.data);
        })
        .catch(error => {
            console.log('There was an error', error);
        });
    }, []);
    console.log('this is photos',photo)
  return (
 
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <NasaImage photo={photo}/>
    </div>
  );
}

export default App;

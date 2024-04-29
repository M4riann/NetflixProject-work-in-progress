import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../Components/GenresButtons.css"
import GenresSelector from "./GenresSelector";
const GenresButtons = () =>{
  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


 

  return (
    <div className="genresButtons">
      {/* <h1 style={{marginTop:"35px",marginRight:"35px", color:"white"}} id="genreName">Filme</h1> */}

        
    
        <button id="showGenresButton" onClick={toggleVisibility}>Genuri</button>
        {isVisible && <GenresSelector/>}
    </div>
  );
}

export default GenresButtons;
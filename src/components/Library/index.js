import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';


const Library = ({parseDate}) => {
  
    const [pictures, setPictures] = useState ([]);

    useEffect(() => {
      getAllPictures();

    }, []);

    

    const getAllPictures = async() => {
        const date = new Date();
        const allPictures = [];
        
        for (let i=0; i<6; i++) {
          date.setDate(date.getDate() -1);
          const dateFormat = parseDate(date);
    
          const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=d4ZphnGlJ8eYvPKIYqfV8Gd8yEx2TWduzXbHVKcx&date=${dateFormat}`)
          allPictures.push(response.data);
        }
        
        setPictures(allPictures);
        console.log(allPictures);       
    }

      

    return (
        <div className ="library">
            {
              pictures.map(image => {
                return (
                  <div className="libraryItem">
                    <img key={image.url} src={image.url}  className="image" />
                    <span className="date">{image.date}</span>
                 </div>)
              })
            }
        </div>
    )
}

export default Library ;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';
import Calend from '../Сalendar';
import Library from '../Library';

const Apod = () => {
    
    const [picture, setPicture] = useState ({});

    useEffect(() => {
        getPicture();

    }, []);

    const getPicture = async (date) => {
        const dateFromLocalStorage = localStorage.getItem('date');
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=BRJVrYqeBjk23oUDc0x4g7Ax8xsPK3VWD38cOngO${date || dateFromLocalStorage ? '&date=' + (date || dateFromLocalStorage) : ''}`)
        setPicture(response.data);  
    }

    const parseDate = date => {
        return (`${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`)
    }

    return (
        <div className="apod" >
            <div className ="container">
                <img src = {picture.url} className = "apodImage" />
                <Calend 
                getPicture = {getPicture}
                parseDate = {parseDate}
                />
            </div>

            <Library parseDate = {parseDate}/>
        </div> 
    )
}

export default Apod ;
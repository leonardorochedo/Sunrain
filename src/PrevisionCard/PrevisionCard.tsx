import React, { useState } from 'react';

import { BsFillDropletFill } from 'react-icons/bs'
import { FaSearch, FaMapPin, FaWind } from 'react-icons/fa'

import './PrevisionCard.css'

export function PrevisionCard() {

    const [city, setCity] = useState({ name: '', temp: 0, description: '', humidity: '', wind: '' })

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Londrina&appid=f8620e3ccd0f4db1f3024ae2085e9600"
      )
        .then((response) => response.json())
        .then((data) => {
          setCity({
            name: data.name,
            description: data.weather[0].main,
            temp: parseInt(data.main.temp),
            humidity: data.main.humidity,
            wind: data.wind.speed,
          });
        });

    return (
        <div className='container'>
            <div className="form">
                <h3 className='title-form'>Consulte o clima de uma cidade:</h3>
                <div className="form-input">
                    <input type="text" placeholder='Digite o nome da cidade' />
                    <button id='search'><FaSearch/></button>
                </div>
            </div>

            <div className="card-info">
                <h2 className='city-name'><span id='pin'><FaMapPin/></span> {city.name} <img className='country' src="https://countryflagsapi.com/png/br" alt="Bandeira do país" /></h2>
                <p className='city-temp'>{city.temp} &deg;C</p>
                <div className="weather-description">
                    <img className='temp' src="http://openweathermap.org/img/wn/01d@2x.png" alt="Condições do tempo" />
                    <p className='city-description'>{city.description}</p>
                </div>
                <div className="weather-details">
                    <p className='city-umidity'><span id='drop'><BsFillDropletFill/></span> {city.humidity}%</p>
                    <p className='city-wind'><span id='wind'><FaWind/></span> {city.wind}km/h</p>
                </div>
            </div>
        </div>
    );
}


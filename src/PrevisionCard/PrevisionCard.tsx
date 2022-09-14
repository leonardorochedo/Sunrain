import React from 'react';

import { BsFillDropletFill } from 'react-icons/bs'
import { FaSearch, FaMapPin, FaWind } from 'react-icons/fa'

import './PrevisionCard.css'

export function PrevisionCard() {
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
                <h2 className='city-name'><span id='pin'><FaMapPin/></span> Maceió <img className='country' src="https://countryflagsapi.com/png/br" alt="Bandeira do país" /></h2>
                <p className='city-temp'>38&deg;C</p>
                <div className="weather-description">
                    <img className='temp' src="http://openweathermap.org/img/wn/01d@2x.png" alt="Condições do tempo" />
                    <p className='city-description'>Nublado</p>
                </div>
                <div className="weather-details">
                    <p className='city-umidity'><BsFillDropletFill/> 48%</p>
                    <p className='city-wind'><FaWind/> 3km/h</p>
                </div>
            </div>
        </div>
    );
}


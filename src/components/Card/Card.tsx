import React, { useState } from 'react';

import { BsFillDropletFill } from 'react-icons/bs'
import { FaSearch, FaMapPin, FaWind } from 'react-icons/fa'

import './Card.css'

export function Card() {

    // Cidade que estamos buscando
    const [city, setCity] = useState({ name: '', country: 'br', weatherIcon: '', temp: 0, description: '', humidity: '', wind: '' })
    // Valor do input
    const [cityName, setCityName] = useState('Londrina')
    
    const APIKey = "f8620e3ccd0f4db1f3024ae2085e9600"
    
    function consultAPI() {
    
        // OpenWeather
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
            )
            .then((response) => response.json())
            .then((data) => {
                setCity({
                    name: data.name,
                    country: data.sys.country,
                    weatherIcon: data.weather[0].icon,
                    description: data.weather[0].main,
                    temp: parseInt(data.main.temp),
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                  });
                });
    
    }
    
    // CountryFlags
    const countryFlag = `https://countryflagsapi.com/png/${city.country}`
    // ícone da previsão
    const weatherIconLink = `http://openweathermap.org/img/wn/${city.weatherIcon}`

    return (
        <div className='container'>
        <div className="form">
                <div className="form-input">
                    <input type="text" placeholder='Digite o nome da cidade' onChange={(e) => setCityName(e.target.value)} />
                    <button id='search' onClick={consultAPI}><FaSearch/></button>
                </div>
            </div>

        <div className="card-info">
                <h2 className='city-name'><span id='pin'><FaMapPin/></span> {city.name} <img className='country' src={countryFlag} alt="Bandeira do país" /></h2>
                <p className='city-temp'>{city.temp} &deg;C</p>
                <div className="weather-description">
                    <img className='temp' src={weatherIconLink} alt="Condições do tempo" />
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

import React, { useState, useEffect } from 'react';

import { BsFillDropletFill } from 'react-icons/bs'
import { FaSearch, FaMapPin, FaWind } from 'react-icons/fa'

import './Card.css'

export function Card() {

    // Cidade que estamos buscando
    const [city, setCity] = useState({ name: '', country: 'br', weatherIcon: '03d', temp: 0, description: '', humidity: '', wind: '' })
    const [bgImg, setBgImg] = useState({ image: '' })
    // Valor do input
    const [cityName, setCityName] = useState('')
    
    const APIKeyOW = "f8620e3ccd0f4db1f3024ae2085e9600"
    const APIKeyUN = "Y7flmph8HVMLPwjiEAQOgxv5dkFFvK2gtPEI3KUorsk"
    
    useEffect(() => {

        // Unsplash
        fetch(`https://api.unsplash.com/search/photos?query=${city.name}&client_id=${APIKeyUN}`)
        .then((response) => response.json())
        .then((data) => {
            setBgImg({
                image: data.results[0].urls.full,
            })
        })

    }, [city.name])

    function consultAPI() {
    
        // OpenWeather
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKeyOW}&units=metric&lang=pt_br`
            )
            .then((response) => response.json())
            .then((data) => {
                setCity({
                    name: data.name,
                    country: data.sys.country,
                    weatherIcon: data.weather[0].icon,
                    description: data.weather[0].description,
                    temp: parseInt(data.main.temp),
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                  });
                });
        
    }

    // CountryFlags
    const countryFlag = `https://countryflagsapi.com/png/${city.country}`
    // ícone da previsão
    const weatherIconLink = `http://openweathermap.org/img/wn/${city.weatherIcon}@2x.png`

    return (
        <div className='container' style={{ backgroundImage: `url('${bgImg.image}')`, backgroundRepeat: 'no-repeat', backgroundSize: '35rem' }}>
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

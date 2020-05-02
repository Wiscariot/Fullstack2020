import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Country(props) {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    

    const fetchWeather = (city) => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
          .then(res => {
           setWeather(res.data.current)
           console.log(res.data.current)
        })}
    useEffect(() => fetchWeather(props.country.capital), [])

    return(
        <div className="Country">
            <div className="Countrydiv">
                <img alt="flag" src={props.country.flag} />
            </div>
            <div className="Countrydiv">
                <h2>{props.country.name}</h2>
                <p>Capital: {props.country.capital}</p>
                <p>Population: {props.country.population}</p>
            </div>
            <div className="Countrydiv Language">
                <h3>Languages: </h3>
                {props.country.languages.map(language =>
                <p key={language.name}>{language.name}</p>    
                    )}
            </div>
            <div className="Countrydiv Weather">
                <h3>Weather in {props.country.capital}</h3>
                <img alt="" src={weather.weather_icons}/><p style={{float: "left"}}><b>{weather.weather_descriptions}</b></p>
                <p>{weather.temperature} °C</p>
                <p>{weather.windspeed}</p>
            </div>
        </div>
    )
}
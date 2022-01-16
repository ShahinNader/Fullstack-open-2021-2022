import Languages from "./Languages"
import { useEffect, useState } from 'react';
import axios from 'axios'


const CountryDetailed = ({country,weather,setWeather,api_key}) =>{

    useEffect(() => {
        console.log('effect_weather')
        axios
          .get('http://api.openweathermap.org/data/2.5/weather?q='+country.capital+'&appid='+api_key)
          .then(response => {
            console.log('promise fulfilled_weather')
            setWeather(response.data)
            })
      }, [])    

    const LangugageArray = []
  
    for(const item in country.languages){
        LangugageArray.push(country.languages[item])


    }


    return(
        <li>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul style={{ listStyleType: "none" }}>
                {LangugageArray.map(language=> {return(<Languages key={language} name={language}></Languages>)})}
            </ul>
            <div>
            <img src={country.flags.png} alt="image"></img>
            </div>
            <div>
                <h2>Weather in {country.capital}</h2>
                <h3>temperatur: {Math.round(weather.main.temp - 273.15)}</h3> 
                <h3>Windspeed: {weather.wind.speed} with an angle of {weather.wind.deg} degrees</h3> 
            </div>
        </li>
    )
}


export default CountryDetailed
import React, { useCallback } from 'react' 
import Country from './Country'
import CountryDetailed from './CountryDetailed'

const Display = ({search, countries, setSearch, weather,setWeather,api_key}) =>{

    
    const textToDisplay = (search) =>{


        let result = countries.filter(country =>{return(country.name.common.toLowerCase().includes(search.toLowerCase()))})
        


        if(result.length >= 10){
            return(
                <p>
                    Too many matches, specify another filter
                </p>
            )
        }

        if(result.length < 10  && result.length>1){
            return(
                <ul style={{ listStyleType: "none" }}>
                    {result.map(country => {return(<Country key={country.name.common} name = {country.name.common} country = {country} setSearch={setSearch}></Country> ) } )}
                </ul>
            )
        }

        if(result.length === 1){
            return(
                <ul style={{ listStyleType: "none" }}>
                {result.map(country => {return(
                <CountryDetailed 
                key={country.name.common}
                country= {country} 
                weather ={weather}
                setWeather={setWeather}
                api_key={api_key}> 
                </CountryDetailed> )} )}
                </ul>

            )
        }
    
    
    
    }



    return( 
        <div key="Countries">
            {textToDisplay(search)}
        </div>
        
    
        )


}


export default Display
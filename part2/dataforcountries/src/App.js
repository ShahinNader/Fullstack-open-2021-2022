
import { useEffect, useState } from 'react';
import './App.css';
import Interface from './components/Interface';
import Display from './components/Display';
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState("")


  const api_key = process.env.REACT_APP_API_KEY



  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setLoading(false)
      })
  }, []) 

  if(loading){
    return(<div> LOADING... PLEASE WAIT </div>)
  }


  

  return (
    <div>

      <Interface countries={countries}
                 setCountries={setCountries}
                 search={search}
                 setSearch={setSearch} 
      ></Interface>

      <Display countries = {countries} 
                search = {search}
                setSearch = {setSearch}
                weather = {weather}
                setWeather = {setWeather}
                api_key = {api_key}
      ></Display>
    </div>
  );
}

export default App;

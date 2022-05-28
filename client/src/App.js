import './App.css';
import React, {useState, useEffect} from 'react';
import AppContainer from './containers/AppContainer';


function App() {

  const [countries, setCountries] = useState([])
  const [savedCountries, setSavedCountries] = useState([])

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then((res) => res.json())
    .then((countries) => setCountries(countries))
}


  const addSavedCountry = (country) => {
    const temp = [... savedCountries]
    const isOnList = temp.some((cou) => {
      return country.properties.sov_a3 == cou.properties.sov_a3
    } )

    if (!isOnList){
      temp.push(country)
    }
    setSavedCountries(temp)
  }

  return (
    <>
      {countries ? <AppContainer countries = {countries} savedCountries = {savedCountries} addSavedCountry={addSavedCountry}/> : null}
      
    </>
    
  )
}

export default App;

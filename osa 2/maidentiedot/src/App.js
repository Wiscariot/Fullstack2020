import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FindCountry from './components/FindCountry'
import ListCountries from './components/ListCountries'
import './style.css'

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const fetchData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
        })
  }
  useEffect(fetchData, [])

  const fetchCountry = (name) => {
    axios
    .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    .then(res => {
      setFilteredCountries(res.data)
    })
}

  


  const filterCountries = (input) => {
    const filtered = countries.filter(country => {return country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1})
    setFilteredCountries(filtered)
  }

  return (
    <div className="App">
      <FindCountry findCountry={filterCountries}/>
      <ListCountries countries={filteredCountries} findCountry={fetchCountry} />
    </div>
  )
}

export default App

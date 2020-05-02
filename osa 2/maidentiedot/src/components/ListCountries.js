import React from 'react'
import Country from './Country'

export default function ListCountries(props) {
    let element = <p></p>



    if( props.countries.length > 10 ) {
        element = <p>Too many matches, specify filter</p> 
    }

    if(props.countries.length > 1  && props.countries.length < 10) {
            
        element = props.countries.map(country =>
                <div key={country.numericCode} className="ListedCountry">{country.name} <button className="ShowButton" onClick={() => props.findCountry(country.name)}>show</button></div>
                )
    }

    if(props.countries.length === 1) {
        element = <Country country={props.countries[0]} />
    }

    return(
        < >
        {element}
        </>
        )

}
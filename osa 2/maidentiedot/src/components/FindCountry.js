import React from 'react'
import Logo from '../worldmap.png'


export default function FindCountry(props) {

return(
    <div className="FindCountries">
     <img alt="world logo" className="Logo" src={Logo}/>   Find Countries: <input type="text" onChange={(e) => props.findCountry(e.target.value)} />
    </div>
    )
}
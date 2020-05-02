import React from 'react'

export default function Filter(props) {

    return(
        < >
            Search: <input type="text" onChange={(e) => props.filter(e.target.value)}/> 
        </>
    )
}
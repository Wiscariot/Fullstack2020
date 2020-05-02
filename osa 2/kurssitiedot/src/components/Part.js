import React from 'react'
import Counter from './Counter'

export default function Part(props) {
    console.log('Part has props', props)
    return(
        < >
          <p>{props.content}&ensp;<Counter  number={props.exercises}/></p>
          <br/>
        </>
        )
}
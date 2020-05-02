import React from 'react'
import Part from './Part'
import Counter from './Counter'


export default function Content(props) {
    const total = Object.values(props.parts).reduce((t, {exercises}) => t + exercises, 0)

    return(
        < >
        {
        props.parts.map((element) => {return (
            <Part content={element.name} key={element.id} exercises={element.exercises} />
        )})  
        }
            <p className="Total"><b>Number of exercises</b> &ensp;<Counter number={total}/> </p>
        </>
      )
}

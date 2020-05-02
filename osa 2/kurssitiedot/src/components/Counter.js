import React, {useState} from 'react'

export default function Counter(props) {
    const [ counter, setCounter ] = useState(0)

    if(counter < props.number) {
      setTimeout(
        () => setCounter(counter + 1),
        80
      )
    }
  
    return (
      < >{counter}</>
    )
  }
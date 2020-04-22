import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const Header  = (props) =>  { 
  return(
  < >
    <h1>{props.course}</h1>
    <br/>
  </>
  ) }

const Content = (props) =>  { 
  return(
        < >
        {
        props.parts.map((element) => {return (
          <Part content={element.name} exercises={element.exercises} />
        )})  
        }
        </>
      ) }

// THIS PART I TOOK FROM STACK OVERFLOW
const Total = (props) =>  { 
  const total = Object.values(props.parts).reduce((t, {exercises}) => t + exercises, 0)
  
  return(
    <p className="Total"><b>Number of exercises</b> &ensp;<Counter number={total}/> </p>
  ) }

const Part = (props) => {

  return(
  < >
    <p>{props.content}<Counter number={props.exercises}/></p>
    <br/>
  </>
  )
}

const Counter = (props) => {
  const [ counter, setCounter ] = useState(0)

  if(counter < props.number) {
    setTimeout(
      () => setCounter(counter + 1),
      80
    )
  }

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

const App = () => {
  const style = {
    margin: 35,
  }
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  


  return (
    
    <div style={style}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
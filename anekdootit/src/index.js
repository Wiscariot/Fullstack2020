import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const Button = (props) => {
  return(
    <input value={props.value} className={props.className} type="button" onClick={() => props.handleClick()}/>
  )
}

const Anecdote = (props) => {
  return(
  <div className={props.className}>
    <p>{props.anecdote}</p>
  </div>
  )
}

const Votes = (props) => {
let votes = 'votes'

if(props.points === 1) {
  votes = 'vote'
}
  return(
    <p className={props.className}><b>This anecdote has {props.points} {votes}</b></p>
  )
}
 
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
  //const mostVotes = points.indexOf()
  const [highest, setHighest] = useState('')
  
  const checkHighest = (arr) => {
    
    const hi = Math.max(...arr)
    const hiIndex = arr.indexOf(hi)
    console.log(hi)
    if(hi>0) {
      console.log(hiIndex)
      setHighest(hiIndex)
    }
  }

  const newAnecdote = () => {
    let randomNr = Math.floor(Math.random()*props.anecdotes.length)

    if(randomNr === selected) {
      randomNr = Math.floor(Math.random()*props.anecdotes.length)
    }
    setSelected(randomNr)
  }

  const vote = () => {
    let copy = [...points]
    copy[selected]+=1
    setPoints(copy)
    checkHighest(copy)
    console.log(copy)
  }

  return (
    <div>
      <Anecdote className="Anecdote Float" anecdote={props.anecdotes[selected]}/>
      <Anecdote className="Anecdote" anecdote={props.anecdotes[highest]}/>
      <Votes className="Votes Float" points={points[selected]} />
      <Votes className="Votes" points={"most"} />
      <Button value="More Wisdom" className="Next" handleClick={newAnecdote} />
      <Button  value= "vote +" className="Vote" handleClick={vote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
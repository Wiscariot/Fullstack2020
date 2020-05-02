import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const Button = (props) => <input className="Button" type="button" value={props.value}  onClick={(event) => props.handleClick(event.target.value, props.vote+1)}/>
  
  const GiveFeedback = (props) => {
    
    const style={
      marginLeft: "30px",
    }

    return(
      <div className="Feedback">
        <h1>Give Us Feedback</h1>
        <div className="ButtonRow">
          <Button value="good" vote={props.statistics.good} handleClick={props.handleClick} />
          <Button value="neutral" vote={props.statistics.neutral} handleClick={props.handleClick} />
          <Button value="bad" vote={props.statistics.bad}handleClick={props.handleClick} />
        </div>
      </div>
    )
  }

  const Statisticline = (props) => {
    
    return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    )
  }
  
  const Statistics = (props) => {
    
    const style={
      
    }

    const total = (props.statistics.good + props.statistics.neutral + props.statistics.bad)
    let average = ((props.statistics.good * 1 + props.statistics.bad * -1) / total).toFixed(2)
    let positive = `${(props.statistics.good / total * 100).toFixed(2)} %`


    if(total == 0) {
        return(
          <div className="Statistic">
            <h1>Statistics</h1>
            <p style={{marginLeft: "30px"}}>No feedback given</p>
          </div>
        )
    }
    
    return(
      <div className="Statistic">
        <h1>Statistics</h1>

        <table className="Table">
          <tbody>
            <Statisticline text={'Good:'} value={props.statistics.good}/>
            <Statisticline text={'Neutral:'} value={props.statistics.neutral}/>
            <Statisticline text={'Bad:'} value={props.statistics.bad}/>
          </tbody>
        </table>
        <table className="Table">
          <tbody>
            <Statisticline text={'Total Votes:'} value={total}/>
            <Statisticline text={'Average:'} value={average}/>
            <Statisticline text={'Positive:'} value={positive}/>
          </tbody>
        </table>
      </div>
    )
  }

const App = () => {
  const [statistics, setStatistics] = useState({   
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleClick = (vote, number) => {
    console.log(`You vote ${vote}`)
    setStatistics({...statistics, [vote]: number})
  }
  

  return (
    <div>
      <GiveFeedback handleClick={handleClick} statistics={statistics}/>
      <Statistics statistics={statistics}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'


const Statistics = (props) => {
 
  if (props.allClicks === 0){
    return( <p>
      No feedback given
    </p>
    )
  }

  return(
    <div>

<table>
<tbody>
  <tr>
    <td> <StatisticLine text="good"/> </td>
    <td> <StatisticLine value ={props.good} /></td>
  </tr>
  <tr>
    <td> <StatisticLine text="neutral"/> </td>
    <td> <StatisticLine value ={props.neutral} /></td>
  </tr>
  <tr>
    <td><StatisticLine text="bad"/></td>
    <td><StatisticLine value ={props.bad} /></td>
  </tr>
  <tr>
    <td><StatisticLine text="total"/></td>
    <td> <StatisticLine value ={props.allClicks} /></td>
  </tr>
  <tr>
    <td> <StatisticLine text="average" /></td>
    <td> <StatisticLine value ={(props.good - props.bad) / (props.good + props.neutral + props.bad)} /></td>
  </tr>
  <tr>
    <td> <StatisticLine text="good"/></td>
    <td> <StatisticLine value ={(props.good)/(props.good + props.neutral + props.bad)*100 + "%"}  /></td>
  </tr>
</tbody>
</table>


    </div>
  )
}

const StatisticLine = (props) => {
  return(

    <table>
<tbody>
  <tr>
  <td>{props.text}</td>
  <td>{props.value}</td>
  </tr>
</tbody>
</table>

  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const allClicks = bad + good + neutral

  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = 'good'></Button>
      <Button handleClick={() => setNeutral(neutral +1)}text = 'neutral'></Button>
      <Button handleClick={() => setBad(bad +1)} text = 'bad'></Button>

      <h2> Statistics</h2>
      <Statistics allClicks = {allClicks} good ={good} bad = {bad} neutral = {neutral}></Statistics>
      
    </div>
  )
}

export default App

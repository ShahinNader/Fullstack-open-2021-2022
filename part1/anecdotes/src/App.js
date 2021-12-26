import React, { useState } from 'react'


const Button  = (props) => {
  return (
        <button onClick={props.handleClick}>
          {props.text}
        </button>
  )
}

const AnecdotesRandomizer = (props) => {
  
  return (
    Math.floor(Math.random() * props.length)
    
  )
}

const Display = (props) =>{

  return (
    <div>

    <h1>
      Anecdote of the day
    </h1>
    <p>{props.text[props.selected]}</p>
    <p>has {props.votes[props.selected]} votes</p>   
    </div>
  )
}

const IncreaseVotes = (selected, stats) => {

  const copy = [...stats];
  copy[selected] +=1;

  return copy;

}
      
const DisplayWinner = (props) => {

  

  console.log(props.votes.indexOf(Math.max(...props.votes)))

  return(
<div>
    <h1>
      The anecdote with most votes
    </h1>

    <p>
      {props.anecdotes[props.votes.indexOf(Math.max(...props.votes))]}
    </p>

    <p>
     Has {Math.max(...props.votes)} votes
    </p>
 </div>
  )

}
  



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients']
  
  
  const [selected, setSelected] = useState(0)
  const [stats, setStats] = useState(Array(7).fill(0))
  

  return (
    <div>

      <Display text = {anecdotes} votes = {stats} selected = {selected} ></Display>
      <Button handleClick = {() => setStats(IncreaseVotes(selected,stats))} text ="vote"></Button>
      <Button handleClick ={() => setSelected(AnecdotesRandomizer(anecdotes)) } text ='Next anecdote'></Button>
      <DisplayWinner anecdotes = {anecdotes} votes = {stats}></DisplayWinner> 
    
      
    </div>
  )
}

export default App
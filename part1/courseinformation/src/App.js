import React from 'react'


const Header = (props) => {
return (
  <div>
    <h1>
     {props.courseName}
    </h1>
  </div>
)
}

const Content = (props) => {   

  return (
  <div>
    <Part name = {props.element[0].name} exercises = {props.element[0].exercises}/>
    <Part name = {props.element[1].name} exercises = {props.element[1].exercises}/>
    <Part name = {props.element[2].name} exercises = {props.element[2].exercises}/>
  </div>
  )
  
}


const Part = (props) => {

   return (
    <>
      <p> {props.name} {props.exercises} </p>
    </>
  )
}

const Total = (props) => {

  let sum = 0;
  props.exercises.forEach(element => { sum += element.exercises })
  
  return (
    <div>
      <p>
       Total exercises {sum}
      </p>
    </div>
  )
}

const App = () => {
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
    <div>
      <Header courseName = {course.name}/>
      <Content element = {course.parts}/>
      <Total exercises = {course.parts}/> 
    </div>
  )

  
}


export default App
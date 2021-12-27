
const Header = ({ courseName }) => { 
    return (
      <h1>{courseName}</h1>
    )
  }
  
  const Total = ({ course }) => {
  
  const total = course.reduce(((acc, currVal) => acc + currVal.exercises ),0)
  
  return (
    <h3>Total of {total} exercises </h3>
  )
  
  }
  
  const Part = ({note}) => {
  
    
    return (
      <li>
        {note.name} {note.exercises}
      </li>    
    )
  }
  
  const Content = ({ course }) => {
  
  
    return (
      <ul>
        {course.map(note => {
      
          return(
  
          <Part key = {note.id} note = {note}></Part>
          
          )})}
  
      </ul>
    )
  }
  
  const Course = ({ course }) => { 
  
      return(
    <div>
      
      {course.map(currentCourse => {
        return(
          <div key={"really this also needs a key? " + currentCourse.id}>
          <Header key = {currentCourse.name + currentCourse.id} courseName={currentCourse.name} ></Header>
          <Content key={currentCourse.name} course = {currentCourse.parts} > </Content>
          <Total key = {"total" + currentCourse.name + currentCourse.id}  course ={currentCourse.parts} ></Total>
          </div>
        )
      })}
    </div>
  )
  }

  export default Course
  
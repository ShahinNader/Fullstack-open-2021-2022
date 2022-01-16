import React, { useEffect, useState } from 'react'
import Phonebook  from './components/Phonebook'
import Notes from './components/Notes'

const App = () => {
  const [persons, setPersons] = useState({persons: [{ name: 'Arto Hellas', number: '040-123456', id: 1 }]})
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    Notes
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, []) 



  return (
    <div>
      <Phonebook
       persons = {persons} 
       setPersons = {setPersons} 
       newName = {newName}
       setNewName = {setNewName}
       newNumber = {newNumber}
       setNewNumber = {setNewNumber}
       showAll={showAll} 
       setShowAll={setShowAll}
       sucessMessage = {sucessMessage}
       setSucessMessage = {setSucessMessage}
       errorMessage = {errorMessage}
       setErrorMessage = {setErrorMessage}
       ></Phonebook>
    </div>
  )
}

export default App
import Form from "./Form"
import Numbers from "./Numbers"
import Filter from "./Filter"
import Notification from "./Notification"
import Error from "./Error"

const Phonebook = ({persons,setPersons ,newName ,setNewName, newNumber, setNewNumber, showAll, setShowAll, sucessMessage, setSucessMessage, errorMessage, setErrorMessage}) => {

   
    return (
        <div>

        <Filter setShowAll={setShowAll}></Filter>

        <h2>Phonebook</h2>
        
        <Form
        persons ={persons}
        setPersons = {setPersons}
        newName = {newName}
        setNewName = {setNewName}
        newNumber = {newNumber}
        setNewNumber = {setNewNumber}
        sucessMessage = {sucessMessage}
        setSucessMessage = {setSucessMessage}
        errorMessage = {errorMessage}
        setErrorMessage = {setErrorMessage}
        ></Form>

        <Notification message = {sucessMessage}></Notification>
        <Error message = {errorMessage}></Error>

        <h2>Numbers</h2>
        <ul>        
        
        {persons.persons.filter(name => {return name.name.toLowerCase().includes(showAll.toLowerCase())}).map((person) => <Numbers persons ={persons} setPersons={setPersons} key = {person.name} name = {person.name} number = {person.number} ></Numbers>)}
        </ul>
        </div>
    )
}

export default Phonebook
import React, { useCallback } from 'react' 
import Notes from './Notes';



function areTheseObjectsEqual(first, second) {
    "use strict";
  
    // If the value of either variable is empty
    // we can instantly compare them and check
    // for equality.
    if (
      first === null ||
      first === undefined ||
      second === null ||
      second === undefined
    ) {
      return first === second;
    }
  
    // If neither are empty, we can check if
    // their constructors are equal. Because
    // constructors are objects, if they are
    // equal, we know the objects are of the
    // same type (though not necessarily of
    // the same value).
    if (first.constructor !== second.constructor) {
      return false;
    }
  
    // If we reach this point, we know both
    // objects are of the same type so all
    // we need to do is check what type one
    // of the objects is, and then compare
    // them
    if (first instanceof Function || first instanceof RegExp) {
      return first === second;
    }
  
    // Throught back to the equlity check
    // we started with. Just incase we are
    // comparing simple objects.
    if (first === second || first.valueOf() === second.valueOf()) {
      return true;
    }
  
    // If the value of check we saw above
    // failed and the objects are Dates,
    // we know they are not Dates because
    // Dates would have equal valueOf()
    // values.
    if (first instanceof Date) return false;
  
    // If the objects are arrays, we know
    // they are not equal if their lengths
    // are not the same.
    if (Array.isArray(first) && first.length !== second.length) {
      return false;
    }
  
    // If we have gotten to this point, we
    // need to just make sure that we are
    // working with objects so that we can
    // do a recursive check of the keys and
    // values.
    if (!(first instanceof Object) || !(second instanceof Object)) {
      return false;
    }
  
    // We now need to do a recursive check
    // on all children of the object to
    // make sure they are deeply equal
    const firstKeys = Object.keys(first);
  
    // Here we just make sure that all the
    // object keys on this level of the
    // object are the same.
    const allKeysExist = Object.keys(second).every(
      i => firstKeys.indexOf(i) !== -1
    );
  
    // Finally, we pass all the values of our
    // of each object into this function to
    // make sure everything matches
    const allKeyValuesMatch = firstKeys.every(i =>
      areTheseObjectsEqual(first[i], second[i])
    );
  
    return allKeysExist && allKeyValuesMatch;
  }



const Form = ({newName, setNewName, setPersons, persons, newNumber, setNewNumber, sucessMessage, setSucessMessage, errorMessage, setErrorMessage}) => {

    const addPerson = useCallback (event => {    
   

        event.preventDefault()
        
        const personObject = {
            name: event.target.formName.value,
            number: event.target.formNumber.value
        }
        for (let i = 0; i< persons.persons.length; i++){

            if (areTheseObjectsEqual(persons.persons[i].name, personObject.name)) {
              
              if(window.confirm(personObject.name + 'Already exists in the phonebook, do you want to update the number? ')){
                const id =  persons.persons[ persons.persons.findIndex(search => search.name === personObject.name)]
                
             
                Notes
                .update(id.id,{name: personObject.name, number: personObject.number})
                .then(response => {
                  Notes
                  .getAll()
                  .then(response => {
                    setPersons(response)
                    setSucessMessage("The number for: " + personObject.name + " was updated to: " + personObject.number)
                    setTimeout(() => {
                      setSucessMessage(null)
                    }, 5000)
                  })                     
              }).catch(error =>{
                setErrorMessage((personObject.name + " has already been deleted from the server"))
                setTimeout(() => {
                  setErrorMessage(null)
                  return(false)
                },5000)
                }) 

            
            } else{
                return (false)
              }
              return(false)
            }
         }
            

        Notes
        .create(personObject)
        .then(response => {
          Notes
          .getAll()
          .then(response => {
            setPersons(response)
            setSucessMessage( personObject.name + " was added to the phonebook")
            setTimeout(() => {
              setSucessMessage(null)
            }, 5000)
            
                 
          })
        })
    },  [setPersons, persons])



    const handleInputName = useCallback(event => {
        setNewName(event.target.value)
    }, [setNewName])

    const handleInputNumber = useCallback(event => {
        setNewNumber(event.target.value)
    }, [setNewNumber])

    return(
        <form onSubmit={addPerson}>
            <div>
                name: <input value = {newName} onChange={handleInputName} id='formName'  />
            </div>
            <div>
                number: <input value = {newNumber} onChange={handleInputNumber} id='formNumber'></input>
            </div>
            <div>
                <button type = "submit"> add</button>
            </div>

        </form>

    )
}

export default Form
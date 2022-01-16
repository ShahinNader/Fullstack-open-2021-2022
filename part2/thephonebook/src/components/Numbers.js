import Notes from "./Notes"

const Numbers = ({name, number, persons, setPersons}) => {

    const handleDelete = (event) =>{
        event.preventDefault()

        if(window.confirm('Are you sure you want to delete ' + name)){
            console.log(persons.persons)
            const id =  persons.persons[ persons.persons.findIndex(search => search.name === name)]
            
            Notes
            .deletePerson(id.id)
            .then(reponse => {
                 Notes
                .getAll()
                .then(response => {setPersons(response)})
             })
        } else {

        }

    }

    return ( 
        <li>
        
        <form onSubmit={handleDelete}>

         {name} - {number} <button name = {name} type="submit">Delete</button>
        
         </form> 
        </li>
    )
}

export default Numbers
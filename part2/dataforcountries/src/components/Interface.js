import React, { useCallback } from 'react' 


const Interface = ({setSearch}) =>{

    const handleInput = useCallback(event => {
        setSearch(event.target.value)
    }, [setSearch])


    return (

        <form onChange = {handleInput} id='search'>          
            <div>
                find countries: <input/>
            </div>
        </form>


        
    )
}


export default Interface
import React, { useCallback } from 'react' 



const Country = ({name, setSearch}) =>{


    const handleClick = useCallback(event => {
        console.log(name)
        setSearch(name)
    }, [setSearch])
    






    return(
        <li>
            {name} <button onClick={handleClick}>Show</button>
        </li>
    )
}


export default Country



import React, { useCallback } from 'react' 


const Filter = ({setShowAll}) =>{



    const dynamicSearch = useCallback(event => {
        setShowAll(event.target.value)
    }, [setShowAll])

    
    return(
        <div>
        <h2> Filter </h2>
        <div>
             <form onChange = {dynamicSearch} id="formSearch">
                <div>
                Search: <input></input>
                </div>

            </form>
        </div>
        </div>
    )

}


export default Filter
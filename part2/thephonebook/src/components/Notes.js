import axios from 'axios'
const baseUrl = 'http://localhost:3001/db'
const createUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(createUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(createUrl + '/' + id)
    return request.then(response => response.data)

}

const update = (id,number) => {
    const request = axios.put(createUrl + '/' +id, number)
    return request.then(response => response.data)
    }






export default{ getAll, create, deletePerson, update}
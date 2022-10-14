import axios from "axios"
const baseUrl = "http://localhost:3001/todos"

const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data)
}

const create = (newTodoObject) => {
    return axios.post(baseUrl, newTodoObject).then((response) => response.data)
}

const update = (id, newTodoObject) => {
    return axios
        .put(`${baseUrl}/${id}`, newTodoObject)
        .then((response) => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const methods = { getAll, create, update, remove }

export default methods

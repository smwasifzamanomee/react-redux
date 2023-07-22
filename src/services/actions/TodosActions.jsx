import axios from "axios"
import { API_URL, TODOS_FAILURE, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/TodosConstants"

export const todosRequest = () => ({
    type: TODOS_REQUEST
})

export const todosSuccess = (todos) => ({
    type: TODOS_SUCCESS,
    payload: todos
})

export const todosFailure = (error) => ({
    type: TODOS_FAILURE,
    payload: error
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(todosRequest())
        axios.get(API_URL)
            .then(response => {
                const todos = response.data
                dispatch(todosSuccess(todos))
            })
            .catch(error => {
                dispatch(todosFailure(error.message))
            })
    }
}




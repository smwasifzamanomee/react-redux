import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../services/actions/TodosActions'

const TodosApp = () => {
    const {isLoading, error, todos} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div>
            TodosApp
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {todos && todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
        </div>
    )
}

export default TodosApp
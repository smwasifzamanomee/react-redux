import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todosReducers } from './services/reducers/TodosReducers'

export const store = createStore(todosReducers, applyMiddleware(thunk))
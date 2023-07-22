import { createStore } from 'redux'
import { CounterReducers } from './services/reducers/CounterReducers'

export const store = createStore(CounterReducers)


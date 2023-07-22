import { TODOS_FAILURE, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/TodosConstants"

const initalState = {
    todos: [],
    loading: false,
    error: null
}

export const todosReducers = (state = initalState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

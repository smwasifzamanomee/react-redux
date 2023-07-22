import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants"

export const getIncrementAction = () => {
    return {
        type: INCREMENT
    }
}
export const getDecrementAction = () => {
    return {
        type: DECREMENT
    }
}
export const getResetAction = () => {
    return {
        type: RESET
    }
}
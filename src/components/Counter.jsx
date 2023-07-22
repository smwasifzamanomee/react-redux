import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDecrementAction, getIncrementAction, getResetAction } from '../services/actions/CounterActions'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(getIncrementAction())
    }
    const handleDecrement = () => {
        dispatch(getDecrementAction())
    }
    const handleReset = () => {
        dispatch(getResetAction())
    }
    return (
        <div>
            <div>Count : {count} </div>
            <div className='flex justify-center items-center mt-4 gap-4'>
                <button onClick={handleIncrement} className='border bg-green-500 rounded-lg p-2'>Increment</button>
                <button onClick={handleReset} className='border bg-blue-500 rounded-lg p-2'>Reset</button>
                <button onClick={handleDecrement} className='border bg-red-500 rounded-lg p-2'>Decrement</button>
            </div>

        </div>
    )
}

export default Counter
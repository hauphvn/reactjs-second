import {useReducer} from "react";

const UseReducerDemo = () => {
    // Step use reducer
    /***
     * 1. Init state
     * 2. Define action for state
     * 3. Define reducer
     * 4. Dispatch
     */
    const initState = 0
    const DOWN_ACT = 'down'
    const UP_ACT = 'up'
    const reducer = (state, action) => {
        switch (action) {
            case DOWN_ACT:
                return state - 1
            case UP_ACT:
                return state + 1
            default:
                throw new Error('Invalid action')
        }
    }
    const [count, dispath] = useReducer(reducer, initState)
    return (
        <div>
            <h1>Learning useReducer</h1>
            <h3>Count value:  {count}</h3>
            <button onClick={() => dispath(DOWN_ACT)}>Down</button>
            <button onClick={() => dispath(UP_ACT)}>Up</button>
        </div>
    )
}

export default UseReducerDemo

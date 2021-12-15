import {useReducer, useRef} from "react";
import reducer ,{initStateToDo} from './reducers'
import {setJobs, setJob, deleteJob} from './actions'
import logger from "./logger";
const UseReducerDemo = () => {
    // Step use reducer
    /***
     * 1. Init state
     * 2. Define action for state
     * 3. Define reducer
     * 4. Dispatch
     */
    const inputRef = useRef()
    const [state, dispatch] = useReducer(logger(reducer), initStateToDo)
    const {job, jobs} = state
    const handleRemoveTodo = (e) => {
        dispatch(deleteJob(e))
    }
    const handleAddTodo = () => {
        dispatch(setJobs(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    // const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>Learning useReducer</h1>
            {/*<h3>Count value: {count}</h3>*/}
            {/*<button onClick={() => dispatch(DOWN_ACT)}>Down</button>*/}
            {/*<button onClick={() => dispatch(UP_ACT)}>Up</button>*/}
            <hr/>
            <h1>To Do</h1>
            <input
                ref={inputRef}
                onChange={(e) => dispatch(setJob(e.target.value))}
                value={job}
                placeholder='Enter todo...'
                type="text"/>
            <button onClick={handleAddTodo}>Add</button>
            <div style={{paddingBottom: '20px'}}>
                <ul style={{listStyleType: 'none'}}>
                    {jobs.map((todo, index) => (
                        <li key={index}>{todo}
                            <button onClick={() => handleRemoveTodo(index)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UseReducerDemo

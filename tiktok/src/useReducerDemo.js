import {useReducer, useRef} from "react";

const UseReducerDemo = () => {
    // Step use reducer
    /***
     * 1. Init state
     * 2. Define action for state
     * 3. Define reducer
     * 4. Dispatch
     */
    const initState = 0
    const initStateToDo = {
        job: '',
        jobs: []
    }
    const inputRef = useRef()
    const DOWN_ACT = 'down'
    const UP_ACT = 'up'
    const SET_JOB = 'setJob'
    const SET_JOBS = 'setJobs'
    const DELETE_JOB = 'deleteJob'
    const deleteJob = payload => {
        console.log('deleteJob: ', payload)
        return {
            type: DELETE_JOB,
            payload
        }
    }
    const setJob = payload => {
        return {
            type: SET_JOB,
            payload
        }
    }
    const setJobs = payload => {
        return {
            type: SET_JOBS,
            payload
        }
    }
    const reducer = (state, action) => {
        switch (action.type) {
            // case DOWN_ACT:
            //     return state - 1
            // case UP_ACT:
            //     return state + 1
            case SET_JOB:
                return {
                    ...state,
                    job: action.payload
                }
            case SET_JOBS:
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
            case DELETE_JOB:
                const newJob = [...state.jobs]
                newJob.splice(action.payload, 1)
                return {
                    ...state,
                    jobs: newJob
                }
            default:
                throw new Error('Invalid action')
        }
    }
    const [state, dispatch] = useReducer(reducer, initStateToDo)
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

import {DELETE_JOB, SET_JOB, SET_JOBS} from "./constans";

export const initStateToDo = {
    job: '',
    jobs: []
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

export default reducer

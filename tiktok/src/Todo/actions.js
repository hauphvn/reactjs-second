import {DELETE_JOB, SET_JOB, SET_JOBS} from "./constans";

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
export const setJobs = payload => {
    return {
        type: SET_JOBS,
        payload
    }
}

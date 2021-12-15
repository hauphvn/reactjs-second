const logger = (reducer) => {
    return (preState, action) => {
        console.group(action.type)
        console.log("Prev state: ", preState)
        console.log("Action: ", action)

        const newState = reducer(preState, action)
        console.log("Next state: ", newState)
        console.groupEnd()
        return newState
    }

}
export default logger

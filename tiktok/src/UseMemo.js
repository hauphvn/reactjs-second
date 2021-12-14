import {memo} from 'react'
const UseMemo = ({count}) => {
     console.log('render memo')
    return (
        <div>
            <h1>Learning memo</h1>
            <p>Value from parent:   {count}</p>
            <br/>
        </div>
    )
 }
 export default memo(UseMemo)

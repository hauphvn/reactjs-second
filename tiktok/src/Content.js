import {useEffect, useState} from "react";

function Content () {
    const [title, setTitle] = useState('')
    useEffect(() => {
        console.log('This use effect run after render DOM')
        // return (() => {
        //     console.log('destroy')
        // })
    })
    return (
        <div>
            <h1>Content</h1>
            <input
                value={title}
            onChange={(e) => setTitle(e.target.value)}
                type="text"/>
        </div>
    )
}

export default Content

import { useState, useEffect } from "react"

function Automaticincrement({ start }) {
    const [count, setCount] = useState(start)

    function start() {
        
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
    })

    function stop() {
        
    }


    return (
        <div className="incrementer-container">

            {count}

        </div>
    )
}

    export default Automaticincrement;
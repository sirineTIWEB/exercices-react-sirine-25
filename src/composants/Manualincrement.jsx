import { useState } from "react"

function Manualincrement() {
    const [count, setCount] = useState(0)

    function increment() {
        console.log("j'incr")
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div className="incrementer-container">

            {count}

            <button onClick={increment}>Add</button>

            <button onClick={decrement}>Del</button>

        </div>
    )
}

export default Manualincrement;
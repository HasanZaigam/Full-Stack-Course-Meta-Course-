import { useState } from "react";
export default function CounterApp() {
    // state variable to hold the number
    const [num, setNum] = useState(0);

    return(
        <div>
            <h1> Counter App Component </h1>
            <div>
                <h2>Current Number : {num}</h2>
                <button onClick={() => setNum(num + 1)}> Increment </button>
                <button onClick={() => setNum(num - 1)}> Decrement </button>
            </div>
        </div>
    )
}
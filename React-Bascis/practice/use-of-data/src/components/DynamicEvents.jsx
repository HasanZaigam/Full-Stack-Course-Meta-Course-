import React, { useState } from 'react';
function DynamicEvents() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
        console.log("Button clicked");
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>Button clicked {count} times</p>
        </div>
    );
}

export default DynamicEvents;
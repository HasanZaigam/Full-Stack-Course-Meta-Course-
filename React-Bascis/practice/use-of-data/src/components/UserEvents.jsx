import React, { useState } from 'react';
function UserEvents() {

    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <>
        <input type="text" placeholder="Type your answer here.." onChange={handleChange} value={value} />
        <p> you typed this : {value}</p>
        <button onClick = {() => setValue("Hello 👋")} > Reset</button>
        </>
    );
}
export default UserEvents;
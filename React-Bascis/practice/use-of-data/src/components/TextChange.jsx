import React, { useState } from 'react';

function TextChange() {
    // using useState hook
    const [text, setText] = useState("hello world");
    const handleChange = () => {
        setText("text changed");
    }
    return (
        <>
            <div>
                <h1> {text}</h1>
                <button onClick = {handleChange}> change me </button>
            </div>
        </>
    );
}

export default TextChange;
import React, { useRef } from 'react';
const UseRef = () => {

    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

  return (
    <div>
        <h1>UseRef Component</h1>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus on the Input</button>
    </div>
  )
}

export default UseRef
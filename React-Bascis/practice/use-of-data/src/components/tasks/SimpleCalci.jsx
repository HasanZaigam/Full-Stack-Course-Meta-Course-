import React, {useRef,useState} from 'react'
import "./SimpleCalci.css"
const SimpleCalci = () => {

    const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef = null;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    resultRef = null;
  }; 
 

  return (
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */}
          <h2>Result : {result}</h2>
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */}
        <button onClick={minus} > Sub</button>
        {/* Add the multiply button onClick={} */}
        <button onClick={times} >Mul</button>
        {/* Add the divide button onClick={} */}
        <button onClick={divide} >Div</button>
        {/* Add the resetInput button onClick={} */}
        <button onClick={resetInput} >Reset Input</button>
        {/* Add the resetResult button onClick={} */}
        <button onClick={resetResult} >Reset Result</button>
      </form> 
    </div> 
  )
}

export default SimpleCalci;
import React, {useState,useMemo} from 'react'

const ExpensiveCal = () => {
    const[count, setCount] = useState(0);

    const total = useMemo (() => {
        console.log("Calculating expensive value...");
        let total = 0;
        for(let i = 0 ; i <1000000000; i++){

            total += i;
        }

        return total;
    },[]);

  return (
    <div>
        <h2>Expensive Calculation with useMemo...</h2>
        <h3> Total : {total} </h3>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <p> Count : {count} </p>
    </div>
  )
}

export default ExpensiveCal
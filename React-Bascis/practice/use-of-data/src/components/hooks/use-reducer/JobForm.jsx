import React, { useReducer } from 'react';
const initialState = {
    name : "",
    email : "",
    position : "",
    password : "",
}
function reducer(state, action){
    switch(action.type){
        case "updateField" :
            return {
                ...state,
                [action.field] : action.value,
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
}
const JobForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type : "updateField",
            field : e.target.name,
            value : e.target.value, 
        });
    }

  return (
    <div>
        <h2> Job Application Form </h2>
        <form>
            <input
                name="name"
                value ={state.name}
                placeholder="Enter your name"
                onChannge ={handleChange}
            />
            <br />
            <input
                name="email"
                value ={state.email}
                placeholder="Enter your email"
                onChange ={handleChange}
            />
            <br />
            <input 
                name="position"
                value ={state.position}
                placeholder="Enter your position"
                onChange ={handleChange}
            />
            <br />
            <input 
                name="password"
                value ={state.password}
                placeholder="Enter your password"
                onChange ={handleChange}
            />
            <br />
            <button type="button" onClick={() => dispatch({type : "reset"})} > Reset </button>
        </form>
    </div>
  )
}

export default JobForm;
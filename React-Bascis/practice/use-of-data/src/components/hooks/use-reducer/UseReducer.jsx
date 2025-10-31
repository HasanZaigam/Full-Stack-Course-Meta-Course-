import {useReducer} from 'react'

 const reducer = (state, action) =>{
       switch(action.type){
        case 'ride':
            return{money : state.money + 50};
        case 'refill':
            return{money : state.money - 30};
        case 'reset':
            return{money : 100};
        default:
            return state;
       }
    }

const UseReducer = () => {
    const initialState = {money: 100};
    // syntax of useReducer...
    const [state, dispatch] = useReducer(reducer, initialState);
   
  return (
    <div>
        <h1>Wallet : {state.money}</h1>
        <div>
            <button onClick = {() => dispatch({type : 'ride'})}> A new ride</button>
            <button onClick = {() => dispatch({type : 'refill'})}> Refill Tank</button>
        </div>
    </div>
  )
}

export default UseReducer
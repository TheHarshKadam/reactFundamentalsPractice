import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count+1}
        case 'DECREMENT':
            return {count: state.count-1}
        case 'RESET':
            return {count: 0}
        default:
            return state;
    }
}
export default function CounterUsingReducer() {
    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div> 
        <h1> Counter Using Reducer </h1>
        <p>COUNT : {state.count} </p>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button>
        <button onClick={()=>dispatch({type: 'RESET'})}>RESET!</button>
    </div>
  )
}

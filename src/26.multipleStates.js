import React, { useState } from 'react'

export default function MultipleStatesInSingleState() {
    const[state, setState] = useState({
        count:0,
        text :'Hello World',
        isActive: true
    });
    function incrementCount(){
        setState({...state, count: state.count+1})
    }
    function decrementCount(){
        setState({...state, count: state.count-1})
    }
    function toggleActive(){
        setState({...state, isActive : !state.isActive})
    }
    function changeText(){
        setState({...state, text: 'Hola Como estas!!'})
    }
  return (
    <div>
        <h1>Multiple State In One Single State</h1>
        <p>Count:{state.count}</p>
        <p>Text:{state.text}</p>
        <p>Active:{state.isActive ? 'yes': 'no'}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={changeText}>Change Text</button>
        <button onClick={toggleActive}>Toggle Active</button>
    </div>
  )
}

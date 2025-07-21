import './App.css';
import React, { useState } from 'react';

const UserInput = () => {
    const [input, setInput] = useState('');
  return (
    <div>
        <h1> User Input</h1>
        <input type="text" placeholder='Type anything' value = {input} onChange={(e)=>setInput(e.target.value)}/>
        <p>Typed String : {input}</p>
    </div>
  )
}

export default UserInput; 
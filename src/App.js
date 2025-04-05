import Counter from './counter';
import Helloworld from './helloworld';
import Userinput from './userInput';
import './App.css';
import React from 'react'

export default function App() {
  return (
    <div>
        <Helloworld />
        <Counter />
        <Userinput />
    </div>
  )
}

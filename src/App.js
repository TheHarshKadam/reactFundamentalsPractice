import Counter from './counter';
import Helloworld from './helloworld';
import Userinput from './userInput';
import DisplayList from './displayList';
import './App.css';
import React from 'react'

export default function App() {
  return (
    <div>
        <Helloworld />
        <Counter />
        <Userinput />
        <DisplayList />
    </div>
  )
}

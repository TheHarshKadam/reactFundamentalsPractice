import Counter from './counter';
import Helloworld from './helloworld';
import Userinput from './userInput';
import DisplayList from './displayList';
import ToggleSwitch from './toggleSwitch';
import FetchApiData from './fetchApiData';
import Timer from './timer';
import BgColorChange from './bgColorChange';
import Routers from './router';
import './App.css';
import React from 'react'



export default function App() {
  return (
    <div>
        <Helloworld />
        <Counter />
        <Userinput />
        <DisplayList />
        <ToggleSwitch/>
        <FetchApiData/>
        <Timer/>
        <BgColorChange/>
        <Routers/>
    </div>
  )
}

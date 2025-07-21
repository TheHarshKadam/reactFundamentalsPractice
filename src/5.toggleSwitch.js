import React, {useState} from 'react'

const ToggleSwitch = () => {
    const[istoggled, setIsToggled] = useState(false);
    const handleToggle = () =>{
        setIsToggled(!istoggled);
    }
    let message;
    if (istoggled === true){
        message = "Switch is ON";
    }
    else{
        message = "Switch is OFF"
    }
  return (
    <div>
        <h1>Toggle Switch</h1>
        <input type='checkbox' onChange={handleToggle}/>
        <p>{message}</p>
    </div>
  )
}

export default ToggleSwitch;
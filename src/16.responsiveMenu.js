import React, { useState } from 'react'
import './styles/responsiveMenu.css'

export default function ResponsiveMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <h1>Responsive Menu</h1>
        <button className='menu-icon' onClick={toggleMenu}>
            ☰
        </button>
        <ul className={`menu ${isOpen? 'open':''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

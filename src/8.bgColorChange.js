import React, { useState } from 'react'

const BgColorChange = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const handleBGColor =()=>{
        const newColor = backgroundColor === 'white' ? 'purple' : 'white'
        setBackgroundColor(newColor)
    }

  return (
    <div style={{
        backgroundColor,
        width:'200px',
        height: '200px',
    }}>
        <h1>Change Background Color</h1>
        <button onClick={handleBGColor} style={{cursor: 'pointer'}}>Change the color</button>
    </div>
  )
}

export default BgColorChange;
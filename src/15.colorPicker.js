import React, { useState } from 'react'

export default function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#000000')
    const handleChange = (e) => {
        setSelectedColor(e.target.value)
    }
    return (
        <div>
            <h1> Color Picker </h1>

            <input type='color' onChange={handleChange}></input>
            <div style={{ width: '100px', height: '100px', backgroundColor: selectedColor }}>

            </div>
        </div>
    )
}

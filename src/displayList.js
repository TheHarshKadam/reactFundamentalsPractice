import React from 'react'

export default function DisplayList(){
    const list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
        <ul>    
            {list.map((item,index)=>{
                return <li key ={index}>
                    {item}
                </li>
            })}
        </ul>
    </div>
  )
}
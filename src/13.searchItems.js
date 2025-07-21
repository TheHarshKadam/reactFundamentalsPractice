import React, { useState } from 'react'

export default function  SearchItems({items}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter((item)=>item.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div> 
        <h1>Items Search</h1>

        <input type='text' placeholder='Search Items...' onChange={(e)=> setSearchTerm(e.target.value)}/>
        <ul>
            {filteredItems.map((item, index)=>(
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
};

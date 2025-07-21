import React from "react";
import { useState, useEffect } from "react";

export default function FetchApiData(){
    const[data,setdata] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>response.json())
        .then((json=>{
            setdata(json);
        }))
    },[])
    return(
        <div>
            {data?(
                <div>
                    <h1>
                        Title: {data.title}
                    </h1>
                    <h3>
                        Body: {data.body}
                    </h3>
                </div>
            ):(
                <p>
                    LOADING...
                </p>
            )}
        </div>
    )
}

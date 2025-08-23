import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchMultipleApi() {
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(null)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{
      setData1(response.data)}
    )
    .catch(error=>{console.error('Error',error)});


    axios.get('https://jsonplaceholder.typicode.com/posts/2')
    .then(response=>{
      setData2(response.data)}
    )
    .catch(error=>{console.error('Error',error)});
  },[])
  console.log(data1,data2)
  return (
    <div> 
        <h1>Fetch Multiple Api</h1>
        <h2>Post 1 :</h2>
        {data1 && <p>{data1.title}</p>}
        <h2>Post 2 :</h2>
        {data2 && <p>{data2.title}</p>}
    </div>
  )
}

export default FetchMultipleApi
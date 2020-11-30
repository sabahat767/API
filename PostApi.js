import React from 'react'
import {useState} from 'react';
import Axios from 'axios';
function PostApi() {
    const [Data, setData]=useState([])
    React.useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setData(res.data.slice(0,10))//sirf 10 array ka data save/set krwya 
           
        })
            })
          console.log(Data)
          
    return (
        <div>
            {
                Data.map(item =>(
                  <>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                  </>
                ))
            }
        </div>
    )
}

export default PostApi

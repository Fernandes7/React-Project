import React, { useEffect, useState } from 'react'
import axios from "axios"
function Project1() {
    const [data,setData]=useState()
    const getdata=()=>{ 
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(responce=>{
        console.log(responce)
        setData(data)
    })
    }   
    useEffect(()=>{
    getdata()
    },[])
  return (
    <div>
        <button>Prew</button>
        <button>Next</button>
    </div>
  )
}

export default Project1
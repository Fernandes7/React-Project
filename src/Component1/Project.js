import React, { useEffect, useState } from 'react'
import axios from "axios"
import Content from './Apifetch'
function Project1() {
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)
    const getdata=async()=>{
        await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(responce=>{
        setData(responce.data.categories)
        setLoading(false)
    })
  }
    useEffect(()=>{
    getdata()
    },[])
  return (
    <div>
        {!loading ? <Content data={data} />:<h1>Loading.....</h1>}
    </div>
  )
}

export default Project1
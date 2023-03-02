import React, { useState } from 'react'
function Content(props) {
  console.log(props)
  const [num,setnum]=useState(0)
  const increment=()=>{
    if(num===props.data.length-1)
    setnum(0)
    else
    setnum(num+1)
  }
  const decrement=()=>{
    if(num===0)
    setnum(props.data.length-1)
    else
    setnum(num-1)
    console.log(props.data.length)
  }
  let item=props.data[num]
  return (
    <div className='wrap'>
        <img src={item.strCategoryThumb} alt="food"/>
        <h3>{item.strCategory}</h3>
        <p>{item.strCategoryDescription}</p>
        <button onClick={decrement}>back</button>
        <button onClick={increment}>Next</button>
    </div>
  )
}

export default Content
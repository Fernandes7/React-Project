import React, { useState } from 'react'
function Content(props) {
  console.log(props)
  const [num,setnum]=useState(1)
  const increment=()=>{
    if(num===10)
    setnum(0)
    else
    setnum(num+1)
  }
  const decrement=()=>{
    if(num===0)
    setnum(10)
    else
    setnum(num-1)
  }
  let item=props.data[num]
  return (
    <div>
        <img src={item.strCategoryThumb} alt="food"/>
        <div>{item.strCategory}</div>
        <button onClick={decrement}>back</button>
        <button onClick={increment}>Next</button>
    </div>
  )
}

export default Content
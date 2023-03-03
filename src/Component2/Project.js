import React, { useState } from 'react'
import Category from './Category'
import item from "./Data"
function Project1() {
    const [selecteditem,setSelected]=useState([])
    const filter=(category)=>{
        const fetch=item.filter((items)=>items.category===category)
        setSelected(fetch)
        console.log(selecteditem)
    }
    let items=selecteditem.map((selected)=>{
      return(
        <div>
        <div>{selected.title}</div>
        <p>{selected.category}</p>
        <p>{selected.desc}</p>
        </div>
      )
    })
  return (
    <div>
        <Category filter={filter} />
        {items}
    </div>
  )
}

export default Project1
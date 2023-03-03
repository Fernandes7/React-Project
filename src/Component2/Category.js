import React from 'react'
function Category(props) {
  return (
    <div>
        <button onClick={()=>props.filter("breakfast")}>Breakfast</button>
        <button onClick={()=>props.filter("lunch")}>Lunch</button>
        <button onClick={()=>props.filter("shakes")}>Shakes</button>
    </div>
  )
}

export default Category
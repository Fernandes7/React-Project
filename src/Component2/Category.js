import React from 'react'
function Category(props) {
  return (
    <div>
        <button onClick={()=>props.filter("breakfast")}>Breakfast</button>
    </div>
  )
}

export default Category
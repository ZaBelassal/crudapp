import React from 'react'

function todoItems({items,deleteItem}) {
  return (

    <div>
    <div>
      <span>Name</span>
      <span>Age</span>
      <span>Action</span>
    </div>
    <div>{items.length >0 ? items.map(item => {
      
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={()=>deleteItem(item.id)}>X</span>
            </div>
        )})
      
      :
      <div> There is no item to show</div>
      
      }
    </div>
    </div>
  )
}

export default todoItems
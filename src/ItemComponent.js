import React from 'react'

function ItemComponent({items}) {
  return (
    <div>{items.map(item => {
        return (
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.age}</li>
            </ul>
        )
    })}</div>
  )
}

export default ItemComponent
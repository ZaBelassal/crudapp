import React from 'react'

function AddItem({addUser}) {

    const handleChange = (e)=>{
        [e.target.id] = e.target.value
    }
  return (
    <>
        <form onSubmit={()=>addUser({id:Math.random,})}>
            <input type="text" id="name" onChange={handleChange} placeholder="Enter your name"></input>
            <input type="number" id="age" onChange={handleChange} placeholder='Enter your age'></input>
            <button>Add User</button>
        </form>
    </>
  )
}

export default AddItem
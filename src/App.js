import './App.css';
import {useState} from 'react'
import TodoItems from './TodoItems';
import AddItem from './AddItem';

function App() {
  const [items,setItems] = useState({
    items:[
      {id:1,name:'Hamza',age:22},
      {id:2,name:'Mohamed',age:23},
      {id:3,name:'Abdo',age:24},
    ]
  })


  const deleteItem = (id) => {

    let allItems = items.items;
    console.log(allItems)
    let i = allItems.findIndex(item=> item.id===id)
    console.log(i);
    allItems.splice(i,1)
    setItems({ 
    items:allItems
    })
  }

  const addUser = (item) =>{
    
    let allItems = items.items;
    allItems.push(item)


  }

  return (
    <div className="App">
      React App
      <TodoItems items={items.items} deleteItem={deleteItem}/>
      <AddItem addUser={addUser}/>
    </div>
  );
}

export default App;

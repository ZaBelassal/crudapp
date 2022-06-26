import './App.css';
import {useState} from 'react'
import ItemComponent from './ItemComponent';

function App() {
  const [items,setItems] = useState({
    items:[
      {id:1,name:'Hamza',age:22},
      {id:2,name:'Mohamed',age:23},
      {id:3,name:'Abdo',age:24},
    ]
  })


  return (
    <div className="App">
      React App
      <ItemComponent items={items.items}/>
    </div>
  );
}

export default App;

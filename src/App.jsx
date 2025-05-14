import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import './App.css';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const handleChange = (evt) => {
    setItem(evt.target.value);
  }
  const addItem = () => {
    if (!item) {
      alert('to do should not be empty');
      return;
    }
    setList([item, ...list]);
    // console.log(list);
    setItem('');
  }
  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      addItem();
    }
  }
  const deleteFun = (id) => {
    // document.getElementById(`delete-btn-${id}`).parentElement.remove()
    // evt.target.parentElement.remove(); // works
    setList(prevList=>prevList.filter((_,index)=>index!=id))

  }
  return (

    <>
      <h1 className="title">To do-list</h1>
      <div className="inputs-container">
        <input type="text" value={item} placeholder="Enter new itmes" onChange={handleChange} onKeyDown={handleKeyDown} />
        <button className="btn" id="add-item-btn" onClick={addItem} >Add Item</button>



      </div>
      <div className="result">
        <ol>
          {list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                value={item}
                deleteItem={deleteFun}
              />


            );
          })}

        </ol>




      </div>


    </>
  )
}
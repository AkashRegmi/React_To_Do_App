import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(["here", "there"]);
  
  const handelsubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, e.target[0].value]);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handelsubmit}>
        <input type="text" required />
        <input type="submit" value="Add To Do" />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}> {todo}<button onClick ={()=>{
            const newTodos= todos.filter((todo, i)=>i !==index);
            setTodos(newTodos);
          }}>Delete</button></li>;
        })}
        
      </ul>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import { Button } from "./components/Button";

function Todo() {
  const [todos, setTodos] = useState(["Learn Php"]);
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState("");
  const handelsubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited === null) {
      setTodos([...todos, e.target[0].value]);
    } else {
      todos[indexToBeEdited] = todo;
      setTodos([...todos]);
      setTodo("");
      setIndexToBeEdited(null);
    }

    e.target.reset();
  };
  const handelDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <>
      <form onSubmit={handelsubmit}>
        <input
          type="text"
          required
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <input
          type="submit"
          value={indexToBeEdited === null ? "Add" : "Update"}
        />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {" "}
              {todo}
              <Button text="Delete" color="red" onClick={() => {
                handelDelete(index);
              }}/>
              <Button text="Edit" color="blue" onClick={() => {
                setIndexToBeEdited(index);
                setTodo(todos[index]);
                //
              }}/>
              
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;

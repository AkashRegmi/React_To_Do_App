import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button";

function Todo() {
  const [todos, setTodos] = useState([]); // Initially empty
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState("");

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); // Parse JSON string to array
    }
  }, []); // Empty dependency array to run only on mount

  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); // Save todos as JSON string
    }
  }, [todos]); // Run this effect every time 'todos' changes

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited === null) {
      setTodos([...todos, todo]); // Add new todo
    } else {
      const updatedTodos = [...todos];
      updatedTodos[indexToBeEdited] = todo; // Update existing todo
      setTodos(updatedTodos);
      setIndexToBeEdited(null);
    }
    setTodo("");
    e.target.reset();
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setTodo(todos[index]);
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={todo}
          placeholder="Add a todo..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="submit"
          value={indexToBeEdited === null ? "Add" : "Update"}
        />
      </form>
      <ul>
        {todos.length === 0 ? (
          <li>No Todos yet</li> // Blank state if no todos
        ) : (
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <Button
                text="Delete"
                color="red"
                onClick={() => handleDelete(index)}
              />
              <Button
                text="Edit"
                color="blue"
                onClick={() => handleEdit(index)}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;

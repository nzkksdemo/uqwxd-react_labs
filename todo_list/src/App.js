import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState([]);

  // Add the handlesubmit code here
  const handleSubmit = e => {
    e.preventDefault();

    const todo = document.getElementById('todoAdd').value;

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert('Enter valid task');
    }

    document.getElementById('todoAdd').value = '';
  };

  // Add the deleteToDo code here

  // Add the toggleComplete code here

  // Add the submitEdits code here

  return (
    <div id="todo-list" className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" align="right" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map(todo => (
        <div key={todo.id} class="todo">
          <div class="todo-text">{todo.text}</div>
        </div>
      ))}
    </div>
  );
};
export default App;

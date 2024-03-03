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
  const handleDelete = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Add the toggleComplete code here
  const toggleComplete = id => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  // Add the submitEdits code here

  return (
    <div id="todo-list" className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" align="right" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <input id="completed" type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
          <div className="todo-text">{todo.text}</div>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default App;

import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoIdForEdit, setTodoIdForEdit] = useState(null);

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
  const handleEditSubmit = newTodo => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === newTodo.id) {
        todo.text = document.getElementById(newTodo.id).value;
      }

      return todo;
    });

    setTodos(updatedTodos);
    setTodoIdForEdit(null);
  };

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" align="right" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input id="completed" type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />

            {todo.id === todoIdForEdit ? <input id={todo.id} type="text" defaultValue={todo.text} /> : <>{todo.text}</>}
          </div>

          <div className="todo-actions">
            {todo.id === todoIdForEdit ? (
              <button onClick={() => handleEditSubmit(todo)}>Save</button>
            ) : (
              <button onClick={() => setTodoIdForEdit(todo.id)}>Edit</button>
            )}

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;

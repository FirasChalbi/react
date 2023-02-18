import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
   
    <div className="todo-app">
      <TodoList />
      <div className="button">
        <button class="netflix-button">Watch now</button>
      </div>  
    </div>
  );
}

export default App;

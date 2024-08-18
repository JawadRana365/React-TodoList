import React, { useState } from 'react';
import './App.css';
import todos from "./data/todoList"
import TodoContainer from './components/TodoContainer/TodoContainer';

export const todoContext = React.createContext()

function App() {
  const[todoList,setTodoList] = useState(todos.todos)

  return (
    <div className="App">
      <todoContext.Provider value={{todoList,setTodoList}}>
        <header className="App-header py-8">
          <TodoContainer/>
        </header>
      </todoContext.Provider>
    </div>
  );
}

export default App;

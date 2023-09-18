import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MainLayout from './layouts/MainLayout';
import AllTodos from './components/todoLists/AllTodos';
import ActiveTodos from './components/todoLists/ActiveTodos';
import CompletedTodos from './components/todoLists/CompletedTodos';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function createTodoHandler(inputValue) {
    const newTodo = {
      text: inputValue,
      id: uuidv4(),
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  }

  function completeTodoHandler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }

  function clearCompletedHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const todosLeft = todos.filter((item) => !item.isCompleted).length;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/MB/"
            element={
              <MainLayout
                createTodo={createTodoHandler}
                todosLeft={todosLeft}
                clearCompleted={clearCompletedHandler}
              />
            }
          >
            <Route
              index
              element={
                <AllTodos todos={todos} completeTodo={completeTodoHandler} />
              }
            />
            <Route
              path="active"
              element={
                <ActiveTodos todos={todos} completeTodo={completeTodoHandler} />
              }
            />
            <Route
              path="completed"
              element={
                <CompletedTodos
                  todos={todos}
                  completeTodo={completeTodoHandler}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from 'react';
import { Addtodo } from "./Components/Addtodo";
import { About } from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {

    console.log("I am OnDelete", todo);
    //Deleting in this way does not work
    //let index = todos.indexOf(todo); 
    //todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("i am adding this to Todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, MyTodo]);
    console.log(MyTodo)

    //if(localStorage.getItem("todos")){
    //} 
  }

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos  Lists" />
        <Switch>
          <Route exact  path="/" render={() => {
            return (
              <>
                <Addtodo addtodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact  path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

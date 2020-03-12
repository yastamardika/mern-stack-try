import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import CreateTodo from "./components/create-todo-components";
import TodosList from "./components/todo-components";
import EditTodo from "./components/edit-todo-components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div class="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav> 
          <br/>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;

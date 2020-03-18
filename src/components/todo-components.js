import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_done ? 'completed' : ''}>
      {props.todo.todo_desc}
    </td>
    <td className={props.todo.todo_done ? 'completed' : ''}>
      {props.todo.todo_must}
    </td>
    <td className={props.todo.todo_done ? 'completed' : ''}> 
      {props.todo.todo_prior}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

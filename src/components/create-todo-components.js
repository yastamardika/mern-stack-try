import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangedTodoDesc = this.onChangedTodoDesc.bind(this);
    this.onChangedTodoMust = this.onChangedTodoMust.bind(this);
    this.onChangedTodoPrior = this.onChangedTodoPrior.bind(this);

    this.state = {
      todo_desc: "",
      todo_must: "",
      todo_prior: "",
      todo_done: false
    };
  }

  onChangedTodoDesc(e) {
    this.setState({
      todo_desc: e.target.value
    });
  }

  onChangedTodoMust(e) {
    this.setState({
      todo_must: e.target.value
    });
  }

  onChangedTodoPrior(e) {
    this.setState({
      todo_prior: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Description: ${this.state.todo_desc}`);
    console.log(`Todo Must: ${this.state.todo_must}`);
    console.log(`Todo Priority: ${this.state.todo_prior}`);

    this.setState({
      todo_desc: "",
      todo_must: "",
      todo_prior: "",
      todo_done: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_desc}
              onChange={this.onChangedTodoDesc}
            />
          </div>
          <div className="form-group">
            <label>Must: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_must}
              onChange={this.onChangedTodoMust}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_prior === "Low"}
                onChange={this.onChangedTodoPrior}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_prior === "Medium"}
                onChange={this.onChangedTodoPrior}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_prior === "High"}
                onChange={this.onChangedTodoPrior}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

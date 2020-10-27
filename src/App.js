import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskArray: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: "",
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  deleteTask(e) {
    const newTasksArray = [...this.state.taskArray];
    newTasksArray.splice(e.target.dataset.index, 1);
    this.setState({ taskArray: newTasksArray });
  }

  editTask(e) {    
    const newTasksArray = [...this.state.taskArray];
    newTasksArray.splice(e.target.dataset.index, 1, this.state.task);    
    this.setState({ taskArray: newTasksArray });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.task}
          ></input>
          <button>Submit</button>
        </form>
        <Overview
          taskArray={this.state.taskArray}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import uniqid from "uniqid";

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      index: null,
    };
    this.handleEditing = this.handleEditing.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditing(task, index) {
    if (this.state.editing && index === this.state.index) {
      return "a";
    }
    return task;
  }

  handleEditClick(e) {
    this.setState((prevState) => ({
      editing: !prevState.editing,
      index: e.target.dataset.index,
    }));
    
  }

  render() {
    return (
      <div>
        {this.props.taskArray.map((task, index) => {
          return (
            <ul key={uniqid()}>
              {`${index + 1}: ${this.handleEditing(task)}`}
              <button onClick={this.props.deleteTask} data-index={index}>
                Delete
              </button>
              <button onClick={this.handleEditClick} data-index={index}>
                Edit
              </button>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Overview;

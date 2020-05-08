import React, { Component } from 'react';

class Form extends Component {
  state = {
    content: null
  }
  handleChange = (e) => {
    this.setState({
        content: e.target.value
    });
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state);
      document.getElementById("add-todo").value="";
  }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Add New Todo:</label>
              <input type="text" id="add-todo" onChange={this.handleChange}/>
          </form>
      </div>
    );
  }
}

export default Form;

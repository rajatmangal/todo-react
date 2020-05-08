import React, { Component } from 'react';

class Form extends Component {
  state = {
    todo: null
  }
  handleChange = (e) => {
    this.setState({
        todo: e.target.value
    });
  }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
  }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Add New Todo:</label>
              <input type="text" onChange={this.handleChange}/>
          </form>
      </div>
    );
  }
}

export default Form;

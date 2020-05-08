import React, { Component } from 'react';
import Todos from './Todos';
import Form from './addForm';

class App extends Component {
  state = {
    todos: [
      {id:1, content: "Buy Milk"},
      {id:2, content: "Play Games"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id!==id;
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Form />
      </div>
    );
  }
}

export default App;

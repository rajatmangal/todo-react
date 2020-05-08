import React from 'react';
import "./index.css";

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item todo" key={todo.id} onClick={() => deleteTodo(todo.id)}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className="center">You have no Todos Left. Yay!</p>);
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}


export default Todos;
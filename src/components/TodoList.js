import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    console.log(props.todos)
    return (
        <div>
            {props.todos.map(item => (
                <Todo toggleCompleted={props.toggleCompleted} key={item.id} todo={item}/>
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;
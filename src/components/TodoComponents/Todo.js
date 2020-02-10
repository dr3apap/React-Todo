import React from "react";

const Todo = props =>(
   <div 
   onClick = {() => props.toggleTodo(props.todo.id)} 
    className={`item${props.todo.completed? 'completed':''}`}
    >
    <p>{props.todo.task}</p>
    </div>
);

export default Todo;
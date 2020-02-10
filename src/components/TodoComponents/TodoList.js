import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList =  props =>(
    <div>
    {props.MyTodo.map(todo =>(
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
    ))}
    <button onClick={props.clearTodo}>Clear Todo</button>
    </div>
    
    
);
  export default TodoList;
import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList =  props =>{



return(
    <div className="todo-list">
        {props.myTodo.map(todo =>(
<Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
        ))}
    <button type="submit" className="btn-submit" onClick={props.clearTodo}>Clear Todo</button>
    </div>
    
    
);
  
} 
  export default TodoList;
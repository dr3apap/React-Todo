import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import"./components/TodoComponents/Todo.css"
import {myTodo} from "./data";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
      super()
      this.state = {
          toDoList:myTodo
      }
  
  
  
  }
  
  
  toggleTodo = clicked =>{
      const newToDoList = this.state.toDoList.map(todo=>{
          
          if(todo.id === clicked) {
            return{
                ...todo,
                completed: !todo.completed
                
            } 
            
        } else{
            return todo;
        }
            });
     
     this.setState({
         toDoList:newToDoList
     });
     
 };
  
clearTodo = itemId =>{
    console.log('Got it', itemId)
 this.setState({toDoList:this.state.toDoList.filter(item =>{
               if(itemId === item.completed ){
                return{...item,completed:!item.completed}
            
            
               return item;
            
            }
        }),
   });


}
  
  
  addTodo = toDoItem =>{
     const newToDo = {
         task:toDoItem,
         id:Date.now(),
         completed:false
     }; 
     
     this.setState({
         toDoList:[...this.state.toDoList, newToDo]
     });
      
 };
  
  
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Welcome to your Todo App!</h2>
           <TodoForm addTodo={this.addTodo}/>
       </div>
       <TodoList myTodo={this.state.toDoList } 
        toggleTodo={this.toggleTodo} clearTodo={this.clearTodo}/>
     </div>
    );
  }
}

export default App;

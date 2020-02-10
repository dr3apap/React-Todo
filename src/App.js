import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
const MyTodo = [
  {
    task: 'Organize Garage',
    id: 1690,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528,
    completed: false
},
{
 task:'Do Groceries',
 id:1903,
 completed:false
},

{
 task:'Practice Coding'  ,
 id:7839,
 completed:false 
},
{
task:"Take a Nap",
id:7370,
completed:false
},
{
task:'Pick kids up From School' ,
id:1346,
completed:false  
}
  
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
      super()
      this.state = {
          toDoList:MyTodo
      }
  }
  toggleTodo = clicked =>{
      const newToDoList = this.state.toDoList.map(item =>{
          
          if(item.id === clicked) {
            return{
                item,completed:!item.completed
            };  
        } else{
            return item;
        }
             
          
          
          
      });
     
     this.setState({
         toDoList:newToDoList
     });
     
  };
  
  
  
  
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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList MyTodo={this.state.toDoList} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;

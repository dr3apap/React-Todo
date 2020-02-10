import React from "react";
class TodoForm extends React.Component{
    
    constructor(){
        super()
        this.state ={
            newToDo:''
        }
    }
    
    handleChange = e => {
      this.setState({
          newToDo:e.target.value
      })  
        
  };
    
    handleSubmit = e =>{
      e.preventDefault();  
      this.props.addTodo(this.state.newToDo)
      this.setState({newToDo:""});
        
    }
    render(){
        return(
       <div>
       <form onSubmit={this.handleSubmit}>
       <label>
       Add-to-Do:
       <input type="text" name="newToDo"placeholder="Todo" value={this.state.newToDo} onChange={this.handleChange}/>
       </label>
       <button type="submit">Submit</button>
       </form>
       </div> 
   ); 
    }
}

export default TodoForm;
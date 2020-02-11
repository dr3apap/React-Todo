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
       
       <form onSubmit={this.handleSubmit}>
         
             
         <textarea type="text" 
       name="newToDo"placeholder="Add-Todo:" 
       value={this.state.newToDo} 
       onChange={this.handleChange}>
        </textarea>
       
         <button type="submit">Submit</button>
       </form>
     
   ); 
    }
}

export default TodoForm;
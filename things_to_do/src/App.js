import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {task} from './task.json'
import { Component } from 'react'
import TaskForm from './components/TaskForm'

class App extends Component{
  constructor()
  {
    super();
    this.state = {
      task 
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    
  }

  handleAddTask(todo)
  {
    this.setState({
      task: [...this.state.task, todo]
    })

  }
  handleDelete(index)
  {
    if( window.confirm('Are ypu sure you want to delete it ?')){
    this.setState({
      task: this.state.task.filter((e,i)=> {
        return i !== index
      })
    })
  }
  }
  render(){
   

const todos =    this.state.task.map( (task, i)=> {
      return(
        <div className="col-md-4">
              <div className="card mt-4">
                  <div className="card-header">
                  <h3>{task.title} </h3>
                  <span  className="badge bg-dark ml-2" >
                    {task.priority}
                  </span>
                  </div>
                  <div className = "card-body">
                  <p>  {task.description}</p>
                  <p>{task.responsible}</p>
                  </div>
                  <div className ="card-footer">
                      <button className ="btn btn-danger" onClick={this.handleDelete.bind(this, i)}> Delete </button>
                  </div>
              </div>
        </div>
       
      )
    });
  return (
    <div className="App">
      <Navigation  title="Home"/>
     
     
      <div className= "container">
      <div className= "row mt-4">
        <div className= "col-md-4 text-center">
        <img src={logo} className="App-logo" alt="logo" />
          <TaskForm  onAddTask ={this.handleAddTask}/>
        </div>
          <div className= "col-md-8">
              <div className="row">
                {todos}
              </div>
          </div>
        </div>
      
        
       </div>

    </div>
  );
}
}

export default App;

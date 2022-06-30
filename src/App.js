import {Component } from  'react';
import Taskview from  './Taskview';
import Addtask from  './Addtask';
import Taskbar from './Taskbar';

class App extends Component {

  state = {tasks: [
    {
      id:1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,     
    },
    {
      id:2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,     
    },
    {
      id:3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true,     
    }
    ], showAddTask:false, userInput: ""}


    showHandler =()=> {
      const doesShow = this.state.showAddTask
      this.setState (
          {showAddTask: !doesShow}
      )}
    deleteHandler =(deleteIndex)=> {
      const deleteIt = this.state.tasks;
      deleteIt.splice(deleteIndex, 1)
      this.setState({deleteIt:deleteIt})
    }
    updateTask =()=>{
      this.setState (
        {showAddTask: false})
    }
    inputChangeHandler = (event) => {
      this.setState({
        userInput: event.target.value 
      })
    }
    newTodo =()=>{
      this.setState({
        tasks:[
          ...this.state.tasks, {text:this.state.userInput} ,{day:this.state.userInput }]
      })
    }
  
  render(){

    const mystyle = {
      backgroundColor: "darkblue"
    }

    let showing = null
    if(this.state.showAddTask){
        showing =  <Addtask  update={this.updateTask}  clicking={this.newTodo}
        valued={this.state.newTodo} updating ={this.inputChangeHandler}></Addtask>

        mystyle.backgroundColor = "red"
    }

    // const characterList = this.state.userInput.map((ch) => {return <div className='taskview'> {ch}  </div>
    // })

    return(
      <div className="App">
      <Taskbar style={mystyle} showHandle={this.showHandler}></Taskbar>
  
      <p>{showing } </p>
       {this.state.tasks.map((viewTask, index) =>
        {return <Taskview clicked={()=>{this.deleteHandler(index)}} text={viewTask.text} day={viewTask.day} > </Taskview> })
       }
       
       {this.inputChangeHandler}
     
      </div>
    )
  }
}
export default App;
const Addtask = (props) => {
    return(
        <div className="addTask">
            <h3>Task</h3>
            <input type='text' placeholder='Add Task'
             onChange={props.updateText}  ></input>
            <h3>Day and Time</h3>
            <input type='text' placeholder='Add Day & Time' value={props.day} 
            onEnter={props.updateText}></input>
            <h4>Set Reminder </h4>
            <input type='checkbox'className="checky"></input>
            <button onClick={props.update}>Save Task</button>
        </div>
    )
} 

export default Addtask;


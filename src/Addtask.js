const Addtask = (props) => {
    return(
        <div className="addTask">
            <h3>Task</h3>
            <input type='text' placeholder='Add Task'
            onChange={props.updating}  value={props.valued}></input>
            <h3>Day and Time</h3>
            <input type='text' placeholder='Add Day & Time' 
            onChange={props.updating}  value={props.valued}></input>
            <h4>Set Reminder </h4>
            <input type='checkbox'className="checky"></input>
            <button onDoubleClick={props.update} onClick = {props.clicking} >Save Task</button>
        </div>
    )
} 

export default Addtask;


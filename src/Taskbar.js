const Taskbar =(props)=> {
    return(
         <div>
            <div className="taskbar">
                <h1>Task Tracker</h1>
                <button style={props.style} onClick={props.showHandle} >Add Task</button>
            </div>
        </div>
    )
}

// const Taskbar = () => {
//     const [click, setClick] = useState(false)
//     const afterClick = null
//     if (afterClick){
//         this.setClick(
//             afterClick = !click
//         )
//     }

//     const clicked = () => {
//         setClick( <Addtask></Addtask>)
//     }

//     return(
//         <div>
//             <div className="taskbar">
//                 <h1>Task Tracker</h1>
//                 <button onClick={clicked}>Add Task</button>
//             </div>
//             <p>{click  } </p>
//         </div>
//     )
// } 

export default Taskbar;
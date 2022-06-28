const Taskview = (props) => {
    
    return(
        <div className='taskview'>
            <div className="eachTask" onDoubleClick={props.clicked}>
                <h3 >{props.text}</h3>
                <p>{props.day}</p> 
            </div>
            {/* {props.map((task, index)=> (<Tasks text={props.text} ></Tasks>))}   */}
        </div>
    )
} 

export default Taskview;
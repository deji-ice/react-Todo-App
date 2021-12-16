import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTasks, removeTasks, updateTasks, completeTasks} from '../JS/Reducers/reducer';
import ListTask from './ListTask';

const mapStateToProps = (state) =>{
    return{
        Tasks: state,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        addTasks:(obj) =>dispatch (addTasks(obj)),
        removeTasks:(id) =>dispatch (removeTasks(id)),
        updateTasks:(obj) =>dispatch(updateTasks(obj)),
        completeTasks:(id) =>dispatch(completeTasks(id))
    };
}
function DisplayTasks(props) {
    const [sort, setSort] = useState("active")
    return (
        <div className='displaytasks'>
            <div className='buttons'>
                <button className='activeA' onClick={()=> setSort("active")}>Active</button>
                <button className='completedA'onClick={()=> setSort("completed")}>Completed</button>
                <button className='allA'onClick={()=> setSort("all")}>All</button>
            </div>
            <ul>
                {
                    props.Tasks.length  > 0 && sort === "active" ?
                    props.Tasks.map(description=>{
                        return(
                            description.isDone ===false&&
                            <ListTask
                            key={description.id}
                            description={description}
                            removeTasks={props.removeTasks}
                            updateTasks={props.updateTasks}
                            completeTasks={props.completeTasks}
                            />
                        )
                    }): null} 
                {/* for completed items */}
                {   props.Tasks.length  > 0 && sort === "completed" ?
                    props.Tasks.map(description=>{
                        return(
                            description.isDone ===true &&
                            <ListTask
                            key={description.id}
                            description={description}
                            removeTasks={props.removeTasks}
                            updateTasks={props.updateTasks}
                            completeTasks={props.completeTasks}
                            />
                        )
                    }): null} 
                    {/* for all */}
                    {   props.Tasks.length  > 0 && sort === "all" ?
                    props.Tasks.map(description=>{
                        return(
                            
                            <ListTask
                            key={description.id}
                            description={description}
                            removeTasks={props.removeTasks}
                            updateTasks={props.updateTasks}
                            completeTasks={props.completeTasks}
                            />
                        )
                    }): null } 
            </ul>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTasks);

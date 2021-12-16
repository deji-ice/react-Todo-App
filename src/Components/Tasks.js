import React, {useState } from 'react';
import { connect } from 'react-redux';
import { addTasks} from '../JS/Reducers/reducer';

const mapStateToProps = (state) =>{
    return{
        Tasks: state,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        addTasks:(obj) =>dispatch (addTasks(obj)),
    }
}
const Tasks = (props) => {
    const [task, setTask] = useState(``);
    
    const handleChange= (e) =>{
        setTask(e.target.value);
    }
    const add =() =>{
        if( task===''){
            alert('Input is empty');
        }
        else{
            props.addTasks({
                id: Math.floor(Math.random()*1000), 
                description:task,
                isDone:false
            })
            setTask(''); 
    
        }
    }    //console.log("props from store", props);
    return (
        <div className='addTasks'>
          <input 
          type={'text'} 
          onChange={(e)=> handleChange(e)} 
          className='task-input'
          id='task-input' 
          value={task}
          />
          <button 
        className='add-btn'
        onClick={() => add()}
        > ADD</button>
        <br/>
        
        </div>
    )
}

//we can use connect method to connect this component with redux store
export default connect(mapStateToProps,mapDispatchToProps) (Tasks);

import React, { useRef } from 'react';
import  {AiFillEdit} from 'react-icons/ai'
import {IoCheckmarkDone} from 'react-icons/io5'
import {MdDelete} from 'react-icons/md'

const ListTask=(props)=> {
    const {description, updateTasks, completeTasks, removeTasks} = props
    const inputRef = useRef(true);
    const changeFocus = () =>{
        inputRef.current.disabled = false
        inputRef.current.focus()
    }
    const update= (id,value,e)=>{
        if (e.which === 13) {
         // 13 is key code for enter key
    updateTasks({id, description: value});
    inputRef.current.disabled = true;   
        }
    }
    return (
    
    <li key={description.id} className='card'>
        <textarea id='tArea' ref={inputRef} disabled={inputRef} defaultValue={description.description} 
        onKeyPress={(e)=>update(description.id, inputRef.current.value, e)}
        />
        <div className="btns">
        <button onClick={()=>changeFocus()}><AiFillEdit/></button>
        {
            description.isDone === false &&(<button style={{color:"green"}} onClick={()=>completeTasks(description.id)}><IoCheckmarkDone/></button>)
        }
        <button style={{color:"red"}}onClick={()=> removeTasks(description.id)}> <MdDelete/></button>
        </div>
        {description.isDone && <span className='completed'>done</span> }
    </li>

    )
}

export default ListTask

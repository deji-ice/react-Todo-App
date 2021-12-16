import {createSlice} from "@reduxjs/toolkit"

const initialState =[];
const addTodoReducer = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        //here we write our reducer
        //adding todos
        addTasks: (state, action)=>{
            state.push(action.payload);
            return state;
        }, 
        //reomve tasks
        removeTasks: (state,action) =>{
            return  state.filter(description => description.id!==action.payload);
        },
        //update tasks
        updateTasks:(state,action)=>{
            return state.map(tasks =>{
                if(tasks.id === action.payload.id){
                    return {
                        ...tasks,
                        description: action.payload.description,
                    }
                }
                return tasks;
            }) 
        },
        //completed
        completeTasks: (state,action) =>{
            return state.map(tasks =>{
                if(tasks.id === action.payload){
                    return {
                        ...tasks,
                        isDone:true
                    }
                }
                return tasks;
            }) 
        },
    }
})

export const {addTasks, removeTasks, updateTasks,completeTasks} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
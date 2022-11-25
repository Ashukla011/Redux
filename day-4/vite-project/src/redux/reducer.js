// import { getTodos, updateTodos } from "./actions";
import { Add_todos, Delete_todos, Get_todos, Update_todos } from "./actionType";



const initialState={
    todos:[],
};
export const todoReducer=(state=initialState,{type,payload})=>{

    switch(type){
       case Get_todos:{
        return {
            ...state,todo:payload
        }
       }
       case Add_todos:{
        return {
            ...state,todo:[...state.todos,payload]
        }
       }
       case Update_todos:{
        const updateTodos=state.todos.map((todo)=>{
            if(todo.id===payload.id){
                return{
                    ...todo,...payload.changes
                }
            }
        })
        return {
            ...state,todos:updateTodos
        }
       }
       case Delete_todos:{
        const filterTodos=state.todos.filter((todo)=>todo.id!==payload);
        return{
            ...state,todos:filterTodos
        }
       
       }

        default:{
            return state;
        }
    }
}
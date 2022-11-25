 import {Get_todos,Update_todos,Add_todos,Delete_todos} from"./actionType"

 export const getTodos=()=>({
    type:Get_todos,
    payload:[]
      //   {id:1,value:'Memmory Todo 1',isCompleted:false},
        
 });

 export const addTodos=(todo)=>({
    type:Add_todos,
    payload:todo
 })
 export const updateTodos=(id,changes)=>({
    type:Update_todos,
    payload:{id,changes}
 })
 export const deleteTodos=(id)=>({
    type:Delete_todos,
    payload:id
 })
import  { useEffect } from "react"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import {useSelector,useDispatch} from "react-redux"
import { getTodos } from "../redux/actions"
 const TodoApp=()=>{

    const todos=useSelector((store)=> store.todos)
   const dispatch=useDispatch()
   
   useEffect(()=>{
    dispatch(getTodos())
   },[])
   return <div>
        <h1>TodoApp</h1>
        <TodoInput/>
        {/* <TodoItem/> */}
        {todos.map((todo)=>(
            <TodoItem key={todo.id}{...todo}/>
        ))}
      
    </div>
}

export default TodoApp
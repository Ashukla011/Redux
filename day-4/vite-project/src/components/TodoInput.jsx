
import {useDispatch} from  "react-redux"
import { addTodos } from '../redux/actions';
import { useState } from 'react';
import {v4} from "uuid"

const TodoInput = () => {

  const [value,setValue]=useState("")
   const dispatch=useDispatch();
  const handleChange=(e)=>{
    setValue(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDfault()
    dispatch(addTodos({
      id:v4(),
      value,
      isCompleted:false,
    }))
  }
  return (
    <form onSubmit={submitHandler}>
      
      <input placeholder='type here...' value={value} onChange={handleChange}/>
      <button type="submit" >
            Add Todo
      </button>
      </form>
    // <form>
    //   <input/>
    //   <button>addTodo</button>
    // </form>
  )
}

export default TodoInput
import React from 'react'
import {useDispatch} from "react-redux"
import {updateTodos} from "../redux/actions"
const TodoItem = ({id,value,isCompeted}) => {
const dispatch=useDispatch()
  return (
    <div>
      onClick={()=>{
        dispatch(updateTodos(id,{isCompeted:!isCompeted}))
      }}
        {value}={isCompeted?"Completed":"Not Completed"}
    </div>
  )
}

export default TodoItem
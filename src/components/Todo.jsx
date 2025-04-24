import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearTodo, removeTodo } from '../reduxTodo/action'

const Todo = () => {

    const dispatch = useDispatch()


  let todo = useSelector((state) => state)

  console.log(todo)




  return (


    <div>
        <button onClick={() => dispatch(addTodo("Eat..!"))}>Add</button>
        <button onClick={() => dispatch(removeTodo())}>Remove</button>
        <button onClick={() => dispatch(clearTodo())}>Clear</button>
        <br/>
        <br/>
        <h2>{ todo && todo.length}</h2>
    </div>

  )
}

export default Todo
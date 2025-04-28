// import React, { useState } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, clearTodo, removeTodo, updateTodo } from '../reduxTodo/action'

// const Todo = () => {
//   const [input, setInput] = useState("")

//     const dispatch = useDispatch()


//   let todo = useSelector((state) => state.todos)

//   console.log(todo)


//   return (

    
//     <div>

//       <input value={input} className='border p-4' type='text'onChange={(e)=>setInput(e.target.value)} />

//       <br/>
//       <br/>

//         <button onClick={() => dispatch(addTodo(input))}>Add</button>
      
//         <button onClick={() => dispatch(clearTodo())}>Clear</button>
//         <br/>
//         <br/>
//         <h2>{ todo && todo.length}</h2>

// {
//   todo?.map((ele) => (
//      <div key={ele.id} className='flex gap-2 justify-between my-2 w-lg shadow shadow-amber-400 rounded-lg p-3'>
//           <div>{ele.id}</div>
//           <div>{ele.title}</div>
//           <div>
//             <button onClick={() => dispatch(updateTodo(ele.id))} >{ele.status ? "✅" : "❌"}</button>
//             </div>
//           <div>  <button onClick={() => dispatch(removeTodo(ele.id))}>Remove</button></div>
//       </div>
//   ))
// }
       
//     </div>

//   )
// }

// export default Todo
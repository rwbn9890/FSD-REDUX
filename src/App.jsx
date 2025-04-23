import { useState } from 'react'

import './App.css'
import { descCount, incCount, resetCount } from './redux/action'

import { useDispatch, useSelector } from 'react-redux'




function App() {

  const count = useSelector((state) => state.count)
  console.log(count)

  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(incCount()) } >+</button>
        <h1>{count}</h1>
      <button onClick={()=> dispatch(descCount())}>-</button>
 <br/>
 <br/>
 <br/>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      
    </>
  )
}

export default App

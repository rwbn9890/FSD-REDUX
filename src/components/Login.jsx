import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/authSlice'

import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  
  const [formdata, setFormData] = useState({name:"", img:"", email:"", password:""})
  const [logdata, setLogData] = useState({ email:"", password:""})
  
  const dispatch = useDispatch()

  function handleForm(e){
    console.log(e.target.name)
    console.log(e.target.value)
    const {name, value} = e.target;

    setFormData({
      ...formdata,
      [name]:value
    })


    setLogData({
      ...logdata,
      [name]:value
    })

  }


async  function handleReg(){
  try {
      const res = await fetch('https://cart-3f7f6-default-rtdb.firebaseio.com/auth.json' ,{
      method: "POST",
      body: JSON.stringify(formdata)
    })
    toast("Register Successfull...!")
  } catch (error) {
    console.log(error)
    toast("something went wrong")
  } 

  handleLog()
  
  }



  async function handleLog() {
    try{
      toast("loading....")
      const res = await fetch("https://cart-3f7f6-default-rtdb.firebaseio.com/auth.json")
      const data = await res.json();
       
      console.log(data)
      // let users = Object.values(data)
      console.log(Object.keys(data))

      for(let key in data){
        if(data[key].email == logdata.email && data[key].password == logdata.password)
        {
          toast("Login Successfull...!")
          dispatch(login({...data[key], key:key}))
          return
        }
      }
      // let currentUser = users.find((ele) => ele.email == logdata.email && ele.password == logdata.password)
      // console.log(currentUser)
      // if(currentUser)
      //   {
      //   toast("Login Successfull...!")
      //   dispatch(login({...currentUser, key:}))
      // }
      // else{
      //   toast("invalie cedential...!")
      // }
    } catch (err){
      console.log(err)
      toast("something went wrong")
    }
   
  }



  return (
    <div>
        <div className="w-md p-5  fixed top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col gap-7 border p-5">
                  Register
                    <input type="text" placeholder='name' name="name" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='img' name="img" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='email' name="email" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleForm} className='border p-3 text-xl' />

                    <button onClick={handleReg} className='rounded py-1 px-4 bg-green-600'>Register</button>
                </div>
               <br></br>
                <div className="flex flex-col gap-7 border p-5">
                    Login
                    <input type="text" placeholder='email' name="email" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleForm} className='border p-3 text-xl' />

                    <button onClick={handleLog} className='rounded py-1 px-4 bg-green-600'>Login</button>
                </div>
        </div>

        <ToastContainer />
    </div>
  )
}

export default Login
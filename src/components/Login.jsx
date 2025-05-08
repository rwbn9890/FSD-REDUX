import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/authSlice'

import { ToastContainer, toast } from 'react-toastify';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebaseconfig';
import { current } from '@reduxjs/toolkit';

const Login = () => {

  const auth = getAuth(app)

  
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


  async function handleReg(){

    try {
     
      const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      const users = res.user

      await updateProfile(users, {
        displayName:formdata.name,
        photoURL : formdata.img
    })

    let cUser = auth.currentUser
    dispatch(login({name:cUser.displayName, email:cUser.email, img: cUser.photoURL}))

    toast.success("Sign UP successfull...!")

    } catch (error) {
      console.log(error.code)
      console.log(error.message)
      toast.error(error.message)
    }
   
    
    
  }


  async function handleLog(){

    try {
      const res = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      const users = res.user
      
      console.log(auth.currentUser)
      toast.success("Sign UP successfull...!")
    } catch (error) {
      console.log(error.code)
      console.log(error.message)
      toast.error(error.message)
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
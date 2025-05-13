import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/authSlice'

import { ToastContainer, toast } from 'react-toastify';

import app from '../firebaseconfig';

import { handleGoogle, userLog, userReg } from '../features/authAction';
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';

const Login = () => {

  const auth = getAuth(app)
  const [remember, setRemember] = useState(false)
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




  useEffect(()=>{

    const typePersist = remember ? browserLocalPersistence : browserSessionPersistence
    setPersistence(auth, typePersist)
    onAuthStateChanged(auth, (user)=>{
        if(user)
        {
          dispatch(login({name:user.displayName, email:user.email, img: user.photoURL}))
        }
        else{
          dispatch(logout())
        }
 })


  },[auth,])






  async function handleReg(){

    try {
 
      await userReg(formdata)
    toast.success("Sign UP successfull...!")
    } catch (error) {
      console.log(error.code)
      console.log(error.message)
      toast.error(error.message)
    }
   
  }


  async function handleLog(){
    try {
      await userLog(formdata)
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
                     
                    <button onClick={handleReg} checked={remember} className='rounded py-1 px-4 bg-green-600'>Register</button>
                </div>
               <br></br>
                <div className="flex flex-col gap-7 border p-5">
                    Login
                    <input type="text" placeholder='email' name="email" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleForm} className='border p-3 text-xl' />
                  <div className='flex gap-4'>
                      <input type="checkbox" checked={remember} onChange={()=> setRemember(!remember)} />
                        <p className='font-bold'>Remember Me</p>
                      </div>
                    <button onClick={handleLog} className='rounded py-1 px-4 bg-green-600'>Login</button>
                
                <div className='flex justify-around'>
                  <button onClick={() => handleGoogle()} className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /></button>
                  <button className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" /></button>
                  <button className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" /></button>
                </div>
                
                
                </div>
        </div>

        <ToastContainer />
    </div>
  )
}

export default Login
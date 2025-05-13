

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/authSlice'
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged, setPersistence, inMemoryPersistence, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth';
import app from '../firebaseconfig';



  const auth = getAuth(app)
  const provider = new GoogleAuthProvider(app)



  export const handleGoogle = async () => {
      let res = await signInWithPopup(auth, provider)
      let cUser = auth.currentUser;   
        toast.success("Sign UP successfull...!")
  }

//   login with ekmail and passsword

export  async function userLog(formdata){

      const res = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)


  }


  export const userReg= async () => {
    
 
        const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        const users = res.user
  
        await updateProfile(users, {
          displayName:formdata.name,
          photoURL : formdata.img
      })
 
  
   }
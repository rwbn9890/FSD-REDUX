

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/authSlice'
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged, setPersistence, inMemoryPersistence, browserSessionPersistence, browserLocalPersistence, GithubAuthProvider } from 'firebase/auth';
import app from '../firebaseconfig';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const db = getFirestore(app)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider(app)
  const gitProvider = new GithubAuthProvider(app)

  export const handleGoogle = async () => {
      let res = await signInWithPopup(auth, provider)
      let cUser = auth.currentUser;   
        toast.success("Sign UP successfull...!")
  }


  export const handleGithub = async () => {
    let res = await signInWithPopup(auth, gitProvider)
     toast.success("Sign UP successfull...!")
  }

//   login with ekmail and passsword

export  async function userLog(formdata){

      const res = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      let usera = res.user

      console.log(usera.uid)

      console.log("login successfull...!")

      // try {
      //   await setDoc(doc(db, "cartData", usera.uid),
      //   {
      //       name: "Los Angeles",
      //   state: "CA",
      //   country: "USA"
      //   }
      // )
      // } catch (error) {
      //   console.log(error)
      // }

   

  }


  export const userReg= async (formdata) => {
  
        const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        const users = res.user
  
        await updateProfile(users, {
          displayName:formdata.name,
          photoURL : formdata.img
      })
 
  
   }

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { replaceData, showCart } from './features/cartSlice'
import Alert from './components/Alert'
import { useEffect, useState } from 'react'
import { showAlert } from './features/alertSlice'
// import { postDataApi } from './features/cartAction'
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import app from './firebaseconfig'




function App() {
  const db = getFirestore(app)
  let auth = useSelector(state=> state.auth.auth)
  let cart = useSelector(state=> state.cart.cartList)
  let cartData = useSelector(state => state.cart)
  let alert = useSelector(state=> state.alert)
  let showCart = useSelector(state=> state.cart.showCart)
  const [first, setFirst] = useState(true)

  const dispatch = useDispatch()
 
  // console.log(cart)
  // console.log(auth.uid)
// console.log(cartData)

//   const dispatch = useDispatch()


// useEffect(() => {
  
//   if(first){
//     setFirst(false)
//     return;
//   }

//  dispatch(postDataApi(cartData, auth.key))


// } ,[cartData])



  useEffect(()=>{
    if(auth)
    {
      console.log("UUID", auth.uid)
       getDoc(doc(db, "cartData", auth.uid))
       .then((res)=>res.data())
       .then((data)=>{
        dispatch(replaceData(data))
       })
    }
  },[])



  console.log(cartData)
  useEffect(()=>{
    if(auth)
    {
      console.log("UUID", auth.uid)

       setDoc(doc(db, "cartData", auth.uid),
              
              cartData
              
            ).then((res)=>console.log(res))
            console.log(cartData)
    }
  },[cartData])



 return (

    <>
     {alert.status && <Alert alert={alert} />}
    { auth &&  <Navbar/>}
    { !auth &&  <Login/>}
    { auth &&  <Products/>}

{ showCart && <Cart/>}
    

       
        
    </>
  )
}

export default App

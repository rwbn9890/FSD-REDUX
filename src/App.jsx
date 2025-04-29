
import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { showCart } from './features/cartSlice'


function App() {

  let auth = useSelector(state=> state.auth.auth)
  let cart = useSelector(state=> state.cart.cartList)
  let showCart = useSelector(state=> state.cart.showCart)
 

  console.log(cart)
  console.log(auth)

 return (

    <>
    
    { auth &&  <Navbar/>}
    { !auth &&  <Login/>}
    { auth &&  <Products/>}

{ showCart && <Cart/>}
    

       
        
    </>
  )
}

export default App

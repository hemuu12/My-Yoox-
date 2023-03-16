import React from 'react'
import {Routes,Route} from "react-router-dom"
import Newarrivals from '../pages/productpage/newsrrivals'
import Homepage from '../pages/homepage'
import Cart from "../pages/cart/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import PaymentSuccess from '../pages/cart/PaymentSuccess'
import Payment from '../pages/cart/Payment'
import Address from '../pages/cart/Address'
const AllRoute = () => {
  const {isAuthenticated, loginWithRedirect} = useAuth0()
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="/product" element={<Newarrivals />}></Route>
      <Route path="/cart" element={
      isAuthenticated===true?<Cart />:<div style={{textAlign:"center"}}><li style={{fontSize:"25px",padding:"50px",listStyleType:"none",fontWeight:"600",textAlign:"center"}}>First Login</li>
      <button style={{padding:"10px 10px 10px 10px",backgroundColor:"#333",border:"1px solid black",marginBottom:"20px",color:"white"}} onClick={() => loginWithRedirect()}>Login</button>
    
      </div>
      }></Route>
      <Route path='/address' element={<Address/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
    </Routes>
    </>
  )
}

export default AllRoute
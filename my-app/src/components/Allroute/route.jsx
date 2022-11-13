
import React from 'react'

import {Routes,Route} from "react-router-dom"
import Newarrivals from '../pages/newsrrivals'
import Login from "../user login/login"
import Homepage from '../pages/homepage'
import Cart from "../pages/cart"
import { useAuth0 } from "@auth0/auth0-react";
const AllRoute = () => {
  const {isAuthenticated, loginWithRedirect} = useAuth0()
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={
      <Login/>
      }></Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="/product" element={<Newarrivals />}></Route>
      <Route path="/cart" element={
      isAuthenticated===true?<Cart />:<div style={{textAlign:"center"}}><li style={{fontSize:"25px",padding:"50px",listStyleType:"none",fontWeight:"600",textAlign:"center"}}>First Login</li>
      <button style={{padding:"10px 10px 10px 10px",backgroundColor:"#333",border:"1px solid black",marginBottom:"20px",color:"white"}} onClick={() => loginWithRedirect()}>Login</button>
    
      </div>
      }></Route>
    </Routes>
    </>
  )
}

export default AllRoute
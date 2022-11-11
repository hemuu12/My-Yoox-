
import React from 'react'

import {Routes,Route} from "react-router-dom"
import Newarrivals from '../pages/newsrrivals'
import Signup from "../user login/signup"
import Login from "../user login/login"
import Homepage from '../pages/homepage'
import Cart from "../pages/cart"

const AllRoute = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/product" element={<Newarrivals />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
    </>
  )
}

export default AllRoute
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Navbar from './components/Navbar/Navbar/Navbar'
import Footer from './components/Navbar/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const[showLogin,setShowLogin]= useState(false)
  return (
    
    <>
    {showLogin?<LoginPopup/>:<></>}
      <div className='app'>
        <Navbar setShowLogin=/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />

    </>


  )
}

export default App
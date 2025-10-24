import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Navbar from './components/Navbar/Navbar/Navbar'
import Footer from './components/Navbar/Footer/Footer'
import { useState } from 'react'

const App = () => {

  const[showLogin,setShowLogin]= useState
  return (
    <>
      <div className='app'>
        <Navbar />
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
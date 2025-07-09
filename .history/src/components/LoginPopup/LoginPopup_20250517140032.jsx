import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = () => {

    const[currState,setCurrState]= useState("Sign Up")

  return (
    <div className='LoginPopup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2></h2>
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
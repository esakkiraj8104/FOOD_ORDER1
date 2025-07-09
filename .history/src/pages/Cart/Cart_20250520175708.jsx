import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
const Cart = () => {


    const {cartItems,food_list,removeFromCart}= useContext(StoreContext);
  return (
    <div className='cart'>
        <div className="cart-items"></div>
    </div>
  )
}

export default Cart
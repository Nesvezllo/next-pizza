import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image';

import { Cart } from './';
import Auth from './Auth.jsx';
import { useStateContext} from '../context/StateContext';

import profile from '../assets/profile.svg'



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, showAuth, setShowAuth } = useStateContext();
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">PizzaTime</Link>
      </p>
      <div className="cart-icons">
        <Image src={profile} className='profile-icon' onClick={() => setShowAuth(true)} />
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
        {showAuth && <Auth />}
      </div>
    </div>
  )
}

export default Navbar
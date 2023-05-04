import React from 'react'
import "./navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="container">
        <div className="left">
            <img src={logo} alt="logo" />
            <p>NeoFi</p></div>
        <div className="center">
            <ul>
                <li className='nav-link nav-link-grow-up'>Trade</li>
                <li className='nav-link nav-link-grow-up'>Earn</li>
                <li className='nav-link nav-link-grow-up'>Support</li>
                <li className='nav-link nav-link-grow-up'>About</li>
            </ul>
        </div>
        <div className="right">
            <button className='navBtn'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Navbar
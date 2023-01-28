import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
<div className='Link'>
    <Link className='li' to={"/"}>Home</Link>
    <Link className='li' to={"/exchange"}>Exchange</Link>
    <Link className='li' to={"/coin"}>Coin</Link>

</div>
  )
}

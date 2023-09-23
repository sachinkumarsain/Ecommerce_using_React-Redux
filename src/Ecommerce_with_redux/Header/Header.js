import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const cartData = useSelector((state) => {
    return state.ecommerce
  })
  return (
    <>
      <header>
        <h1>Ecommerce</h1>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/sign" >Sing In</Link>
          </li>
          <li><Link to="/cart"> Cart:-<span>{cartData.cart.length}</span></Link></li>
        </ul>
      </header>
      {/* <h1>Ecommerce</h1>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li> */}
    </>
  )
}

export default Header
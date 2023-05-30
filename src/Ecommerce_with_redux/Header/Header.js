import React from 'react'
import "./Header.css"

function Header() {
  return (
    <>
      <header>
        <h1>Ecommerce</h1>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Blog</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
        <h2><a href=''>Cart:-<span></span></a></h2>
      </header>
    </>
  )
}

export default Header
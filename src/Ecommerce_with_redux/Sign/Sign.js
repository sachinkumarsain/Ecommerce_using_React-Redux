import React from 'react'
import "./Sign.css"

function Sign() {
  return (
    <>
    <div className='container'>
      <form className='ragister'>
        <h1>Ragister</h1>
        <input type='text' placeholder='Enter Username'></input>
       <br/>
       <input type='text'placeholder='Password'></input>
           
      </form>
      <form className='login'>
        <h1>Ligin</h1>
        <input type='text' placeholder='Enter Username'></input><br/>
        <input type='text'placeholder='Enter Password'></input>
      </form>
    </div>
    </>
  )
}

export default Sign
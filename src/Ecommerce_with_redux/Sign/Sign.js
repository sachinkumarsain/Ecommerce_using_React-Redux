import React from 'react'
import "./Sign.css"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeForm } from '../EcommerceSlice/HomeSlice1';


function Sign() {
  const dispach =useDispatch();
  const signChange=useSelector((state)=>{
    return state.ecommerce
  })
  function handleChangeForm(e){
    e.preventDefault()
    dispach(setChangeForm())

  }
  console.log(signChange)
  return (
    <>
    <section className='signSection'>
      <div className='signBox'>
      <form className='ragister' style={{left:(signChange.singFormChange===true) ? "0": "100%"}}>
        <h1>Ragister</h1>
        <label>Username</label>
        <input type='text' placeholder='Enter Username'></input>
       <br/>
       <label> New Password</label>
       <input type='text'placeholder='New Password'></input><br/>
       <label>Confirm Password</label>
       <input type='text'placeholder='Confirm Password'></input><br/>
           
       <button type='submit'>Submit</button>
      
      </form>
      <form className='login' style={{left:(signChange.singFormChange===false)?"0":"-100%"}}>
        <h1>Login</h1>
        <label>Username</label>
        <input type='text' placeholder='Enter Username'></input>
       <br/>
       <label>Password</label>
       <input type='text'placeholder='Password'></input><br/>
     

       <button type='submit'>Submit</button>
      </form>
      <a onClick={(e)=>
      handleChangeForm(e)}href=''>
        <CloseIcon/> </a>
      </div>
      
      </section>
    </>
  )
}

export default Sign
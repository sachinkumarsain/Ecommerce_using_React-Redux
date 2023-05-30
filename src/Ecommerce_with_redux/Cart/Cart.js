import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"

function Cart() {
    const CartStore=useSelector((state)=>{
        return state.ecommerce
    })
   
  return (
   <>
   <section>
    <h1>Cart product</h1>
    {
        CartStore.cart.map((CartProduct,index)=>{
            return(
                <div className='productBox'>
                    <img src={CartProduct.image}></img>
                   <div className='other'>
                   <h2>{CartProduct.title}</h2>
                    <h3>{CartProduct.price}</h3>
                    <p>{CartProduct.description}</p>
                   </div>
                    
                </div>
            )
        })
    }
   </section>
   </>
  )
}

export default Cart
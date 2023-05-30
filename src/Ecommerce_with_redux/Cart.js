import React from 'react'
import { useSelector } from 'react-redux'

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
                    <h2></h2>
                    <h3></h3>
                    
                </div>
            )
        })
    }
   </section>
   </>
  )
}

export default Cart
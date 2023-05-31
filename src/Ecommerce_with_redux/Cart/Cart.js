import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { setDeleteCart } from '../EcommerceSlice/HomeSlice1';
import "./Cart.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Cart() {
    const CartStore=useSelector((state)=>{
        return state.ecommerce
    })
    const dispach=useDispatch()
    function deleteCartProduct (e,index){
        e.preventDefault()
         dispach(setDeleteCart())
    }
   
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
                    <h3>
                    <CurrencyRupeeIcon />{CartProduct.price}</h3>
                    <p>{CartProduct.description}</p>
                   </div>
                   <a href='' onClick={(e)=>deleteCartProduct(e,index)}>Clear</a>
                    
                </div>
            )
        })
    }
   </section>
   </>
  )
}

export default Cart
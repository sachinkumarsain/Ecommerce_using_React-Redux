import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../EcommerceSlice/HomeSlice1';
import { setCart } from '../EcommerceSlice/HomeSlice1';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Home.css"

function Home() {
  const dispatch = useDispatch();
  const inti = useSelector((state) => {
    return state.ecommerce
  })
  useEffect(() => {
    dispatch(fetchData())
    localStorage.setItem("product",JSON.stringify(inti.cart))
  },[inti.cart])
  console.log(fetchData)

  function trimDescrip(desc) {
    return (
      desc.length > 80 ? desc.slice(0, 80) + "...." : desc
    )
  }
  function trimTitle(title){
    return(
      title.length>40 ? title.slice(0,40)+"..":title
    )
  }
  function handleDeleteCart (e,id){
    e.preventDefault();
  }
  function handleToCart(e, id){
    e.preventDefault();
    dispatch(setCart(id))
  }
  function exitInCart (product){
    let exit=false;
    inti.cart.forEach((e)=>{
      if(e.id===product)exit=true
    })
    return exit
  }
  // function handleToCart(e, id){
  //   e.preventDefault();
  //   dispatch(setCart(id))
  // }
  // function exitInCart (product){
  //   let exit=false;
  //   inti.cart.forEach((e)=>{
  //     if(e.id===product)exit=true
  //   })
  //   return exit
  // }

  console.log(inti.cart)

  return (
    <>
      <div className='container'>
      {/* <Header/> */}
        {
          inti.products.map((items, index) => {
            return (
              <div className='box' key={index}>
                <img src={items.image}></img>
                <h1>{trimTitle(items.title)}</h1>
                <h2><CurrencyRupeeIcon />{items.price}</h2>
                <p className='description'>{trimDescrip(items.description)}</p>
                {
                  (exitInCart(items.id))? (<a href='' onClick={(e)=>handleDeleteCart(e,items)} className='addedToCart'>Added To Cart</a>):(<a href='' className='add to cart' onClick={(e)=>handleToCart(e, items)}>Add To Cart</a>)
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
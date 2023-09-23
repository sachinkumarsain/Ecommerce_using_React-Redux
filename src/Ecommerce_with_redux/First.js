import React from 'react'
import Header from './Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home/Home"
import Cart from './Cart/Cart'
import Sign from './Sign/Sign'
import Footer from "./Footer/Footer"


function First() { 
    return (
        <>
        {/* <Home/> 
        <Sign/>
        <Cart/>  */}
        {/* <Header/> */}

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/sign' element={<Sign/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>               
        </>
    )
}

export default First
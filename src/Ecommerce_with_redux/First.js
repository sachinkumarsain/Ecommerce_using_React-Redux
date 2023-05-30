import React from 'react'
import Header from './Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Sign from './Sign'


function First() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/sign' element={<Sign/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default First
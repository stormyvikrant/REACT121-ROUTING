import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import ProductDetail from '../Pages/Productdetail';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
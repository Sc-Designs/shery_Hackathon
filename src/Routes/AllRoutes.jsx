import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProducetPage from '../Pages/ProducetPage'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import ProductDets from '../Pages/ProductDets'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Wrapper from '../Auth/Wrapper'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:type" element={<ProducetPage />} />
      <Route path="/product-dets/:id" element={<ProductDets />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route element={<Wrapper />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProducetPage from '../Pages/ProducetPage'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:type" element={<ProducetPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}

export default AllRoutes
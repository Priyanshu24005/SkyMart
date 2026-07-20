import React from 'react'
import {Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import CreateId from '../pages/CreateId'
import Login from '../pages/Login'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<CreateId />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/products' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes

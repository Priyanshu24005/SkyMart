import React from 'react'
import {Routes, Route } from 'react-router'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import About from '../Components/About'
import CreateId from '../pages/CreateId'
import Login from '../pages/Login'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<CreateId />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/products' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes

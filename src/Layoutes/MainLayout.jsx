import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Footer from '../Components/Footer'


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
       <div className="min-h-screen w-full bg-black relative overflow-hidden">
      
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 bg-lime-400/10 blur-[150px] rounded-full" />
      
            <div className="relative z-10">
          
              <Outlet/>
            </div>
    </div>
    <Footer />
    </div>
  )
}

export default MainLayout

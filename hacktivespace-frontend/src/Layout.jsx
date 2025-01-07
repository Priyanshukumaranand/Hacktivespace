import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './components/About/About'

function Layout() {
  return (
   <>
    <Header/>
    {/* <About/> */}
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout
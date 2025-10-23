import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import ResNav from '../components/ResNav'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>

    <Navbar/>
    <ResNav/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default LayoutOne
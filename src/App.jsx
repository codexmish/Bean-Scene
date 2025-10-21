import React from 'react'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
  

    </Route>
  ))
  return (



    <>
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App
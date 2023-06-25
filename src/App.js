import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'
import Mynavbar from './pages/Mynavbar'
import Oneone from './pages/Oneone'
import Reset from './pages/Reset'
import Tasks from './pages/Tasks'




function App() {
  return (
    <>
    <BrowserRouter>
  <Mynavbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Register' Component={Oneone}/>
    <Route path='/Reset' Component={Reset}/>
    <Route path='/Tasks' Component={Tasks}/>
      </Routes> 
    </BrowserRouter>
   
    </>
  )
}

export default App

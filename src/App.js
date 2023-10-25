import React from 'react'
import {Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Header from './Components/Header'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Index from './nested'
import Helper from './nested/Helper'
import User from './nested/User'
import Github, { githubInfoLoader } from './components/Github'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route index element={<Index />}/>
          <Route path='helper' element={<Helper/>} />  
          <Route path='user/:userid' element={<User/>}/>     
        </Route>
        <Route  loader={githubInfoLoader} path='/github' element={<Github/>}/>
      </Routes>
      <Footer/>
       
    </>
  )
}

export default App

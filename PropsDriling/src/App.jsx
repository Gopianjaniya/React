 
import React, { useState } from 'react'
import { UserContext } from './components/UserContext';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Profile from"./NestedPage.jsx/Profile"

function App() {

  const [user,setUser]= useState({name:"gopilal",email:"gopi@example.com",});

  return (
   <UserContext.Provider value={user}>
    <div>
      <Navbar/>
      <Footer/>
      <Profile/>

    </div>
   </UserContext.Provider>
  )
}

export default App
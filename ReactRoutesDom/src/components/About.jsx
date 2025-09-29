import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>About
      <div className='w-30 h-full bg-amber-800 flex flex-col'>
        <Link to={"/about"}>Index</Link>
        <Link to={"helper"}>Help</Link>
        <Link to={"user"}>User</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default About;
 
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Navbar() {
  const user = useContext(UserContext);
  return (
    <nav className='bg-gray-400 p-10'>
      <h3>Welcome, {user.name}</h3>
    </nav>
  );
}

export default Navbar
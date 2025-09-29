
import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

function Footer() {
  const user = useContext(UserContext);
  return (
    <footer  className='bg-yellow-300 p-10' >
      <p>Logged in as {user.email}</p>
    </footer>
  );
}

export default Footer
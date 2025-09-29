import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../components/UserContext'

function Profile() {
    const  user = useContext(UserContext);
  return (
    <div className='bg-blue-500 p-10'>
      <h2>Profile</h2>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default Profile
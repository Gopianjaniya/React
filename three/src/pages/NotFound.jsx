import React from 'react'

function NotFound() {
  return (
    <div className="w-screen h-screen grid place-items-center text-red-700">
      <h1 className="text-9xl  font-bold">
        404
        <small className='text-2xl'>Not Found</small>
      </h1>
    </div>
  );
}

export default NotFound
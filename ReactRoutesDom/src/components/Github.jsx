import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    // const data = useLoaderData()
    const [data,setData] = useState()

    useEffect(()=>{
        fetch("https://api.github.com/users/Gopianjaniya")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });

    },[])
  return (
    <div className="bg-gray-600 p-4 text-white text-3xl text-center">
      Github :{data?.name}
      <img src={data?.avatar_url} alt="image" width={300} height={300} className='rounded-full'/>
    </div>
  );
}


//  error ====================

// export const githubInfoLoader = async() => {
//     const repo =  await fetch("https://api.github.com/users/gopianjaniya")
//     return repo.json();
// };
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

  const data =  useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Lovethakur1')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // })
  return (
    <div className='text-center bg-gray-500 m-6 p-10'>
    <div className='text-orange-400 text-3xl'>
        GitHub Followers: {data.followers} <br />
        GitHub Username: {data.name}
    </div>
    <div className='mt-4'>
        <img src={data.avatar_url} alt={data.name} className='rounded-full w-32 h-32 mx-auto hover:bg-purple-400 bg-white' />
    </div>
</div>

  )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Lovethakur1')
   return response.json()
    

}
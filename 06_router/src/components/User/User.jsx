import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const userId = useParams().userId
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-orange-500 '>

       userId : {userId}
        </h1>
    </div>
  )
}

export default User
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    let {id} = useParams();

  return (
    <div className='text-black'>User: {id}</div>
  )
}

export default User
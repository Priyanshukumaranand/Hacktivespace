import React from 'react'
import {useRouteLoaderData} from 'react-router-dom'

function Github() {
    const data = useRouteLoaderData("1");
    return (
    <div>Github: {data.followers}</div>
  )
}

export default Github

export const GitHubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    return data;
}
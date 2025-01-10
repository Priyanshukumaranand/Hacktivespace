import React from 'react'
import { Link } from 'react-router-dom'
const Tags = () => {
  return (
    <>
      <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
        <h5 className="mb-4">Tags</h5>

        <Link to="#">Web</Link>
        <Link to="#">agency</Link>
        <Link to="#">company</Link>
        <Link to="#">creative</Link>
        <Link to="#">html</Link>
        <Link to="#">Marketing</Link>
        <Link to="#">Social Media</Link>
        <Link to="#">Branding</Link>
      </div>
    </>
  )
}

export default Tags
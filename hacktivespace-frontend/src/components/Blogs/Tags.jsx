import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ tags }) => {
  return (
    <>
      <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
        <h5 className="mb-4">Tags</h5>
        {/* {tags.map((tag, index) => (
          <Link to={`/category/${tag.slug}`} key={index} className="tag">{tag.title}</Link>
          ))} */}

          <Link to='#'className="tag">AI</Link>
          <Link to='#'className="tag">BlockChain</Link>
      </div>
    </>
  )
}

export default Tags
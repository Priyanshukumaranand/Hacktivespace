import React from 'react'
import { Link } from 'react-router-dom'
const Search = () => {
    return (
        <div>
            <div className="sidebar-widget search card p-4 mb-3 border-0">
                <input type="text" className="form-control" placeholder="search" />
                <Link to="#" className="btn btn-mian btn-small d-block mt-2">search</Link>
            </div>
        </div>
    )
}

export default Search
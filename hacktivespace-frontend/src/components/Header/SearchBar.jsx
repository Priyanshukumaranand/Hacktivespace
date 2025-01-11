import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../lib/sanity';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      sanityClient
        .fetch(
          `*[_type == "blog" && title match $searchTerm]{
            title,
            slug
          }`,
          { searchTerm: `${e.target.value}*` }
        )
        .then((data) => setResults(data))
        .catch((err) => console.error(err));
    } else {
      setResults([]);
    }
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="ml-lg-4">
      <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
        <input
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={searchInputRef}
          type="text"
          className="btn btn-solid-border btn-round-full ml-2"
          placeholder="Search..."
          aria-label="Search"
        />
        {showSuggestions && (
          <ul
            className="dropdown-suggestions"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '4px',
              marginTop: '4px',
              padding: '8px 0',
              listStyle: 'none',
              zIndex: 1000,
            }}
          >
            {results.length === 0 && searchTerm !== '' ? (
              <li style={{ padding: '8px 16px', color: '#666' }}>No suggestions</li>
            ) : (
              results.map((item) => (
                <li key={item.slug.current}>
                  <Link
                    to={`/blogs/${item.slug.current}`}
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#f5f5f5')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
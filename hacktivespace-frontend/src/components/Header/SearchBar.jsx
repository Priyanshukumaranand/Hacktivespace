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
    <div className="ml-lg-4" style={{ position: 'relative' }}>
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
          style={{
            width: '300px', // Set a fixed width for the input field
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            textTransform: 'none', // Ensure the text is displayed as typed
          }}
        />

        {showSuggestions && (
          <ul
            className="dropdown-suggestions"
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)', // Spacing below the input
              left: 'auto', // Align to the input's left edge
              width: '100%', // Match the input width
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '0 0 4px 4px', // Rounded bottom corners
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              zIndex: 1000,
              maxHeight: '300px', // Limit height
              overflowY: 'auto', // Add scrolling for overflow
            }}
          >
            {results.length === 0 && searchTerm !== '' ? (
              <li
                style={{
                  padding: '12px 16px',
                  color: '#666',
                  fontSize: '14px',
                }}
              >
                No suggestions
              </li>
            ) : (
              results.map((item) => (
                <li key={item.slug.current}>
                  <Link
                    to={`/blogs/${item.slug.current}`}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      color: '#333',
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#f1f1f1')}
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

import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import sanity from '../../lib/sanity'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        sanity.fetch(`*[_type == "blog" && title match $term]{ title, slug }`, { term: `${searchTerm}*` })
            .then((data) => setResults(data))
            .catch((err) => console.error(err));
    }, [searchTerm]);

    const handleChange = (e) => setSearchTerm(e.target.value);
    const handleFocus = () => setShowSuggestions(true);
    const handleBlur = () => setTimeout(() => {
        if (document.activeElement !== searchInputRef.current) {
            setShowSuggestions(false);
        }
    }, 200);

    const handleSearchClick = () => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        sanity.fetch(`*[_type == "blog" && title match $term]{ title, slug }[0...3]`, { term: `${searchTerm}~` })
            .then((data) => setResults(data))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="sidebar-widget search card p-4 mb-3 border-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="search"
                    value={searchTerm}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={searchInputRef}
                />
                <Link to="#" className="btn btn-mian btn-small d-block mt-2" onClick={handleSearchClick}>search</Link>
                {showSuggestions && (
                    <ul className="dropdown-suggestions" style={{
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
                        zIndex: 1000
                    }}>
                        {results.length === 0 && searchTerm !== ''
                            ? <li style={{ padding: '8px 16px', color: '#666' }}>No suggestions</li>
                            : results.map((item) => (
                                <li key={item.slug.current}>
                                    <Link 
                                        to={`/blogs/${item.slug.current}`}
                                        style={{
                                            display: 'block',
                                            padding: '8px 16px',
                                            color: '#333',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Search
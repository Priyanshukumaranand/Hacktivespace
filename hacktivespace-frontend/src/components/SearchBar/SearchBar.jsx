import React,{useState,useCallback,useEffect} from "react";
import { projects } from "../projects/project";

let suggestions=[];

suggestions = projects.map((project)=>project.title);

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    // Debounce Timer
    let debounceTimer;
  
    const handleInputChange = (e) => {
      const userInput = e.target.value;
      setQuery(userInput);
  
      // Show suggestions only if input is not empty
      if (userInput.trim() !== "") {
        setShowSuggestions(true);
  
        // Debounce filtering
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const matchedSuggestions = suggestions.filter((suggestion) =>
            suggestion.toString().toLowerCase().includes(userInput.toString().toLowerCase())
          );
          setFilteredSuggestions(matchedSuggestions);
        }, 300); // Adjust debounce timing as needed
      } else {
        setShowSuggestions(false);
      }
    };
  
    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion);
      setShowSuggestions(false);
    };
  
    return (
      <div style={{ position: "relative", width: "300px" }}>
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search any projects..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
  
        {/* Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "white",
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
              <a href="https://www.google.co.in/" className="text-black no-underline">  {suggestion} </a>
              </li>
            ))}
          </ul>
        )}
  
        {/* No Suggestions Message */}
        {showSuggestions && filteredSuggestions.length === 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              padding: "10px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              zIndex: 1000,
            }}
          >
            No suggestions found.
          </div>
        )}
      </div>
    );
  };
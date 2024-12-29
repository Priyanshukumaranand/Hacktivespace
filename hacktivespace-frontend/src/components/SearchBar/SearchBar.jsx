import React,{useState,useCallback,useEffect} from "react";
import { projects } from "../projects/project";

let suggestions=[];

suggestions = projects.map((project)=>project.title);

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(()=>{
        const matchedSuggestions = suggestions.filter((suggestion) =>
            suggestion.toString().toLowerCase().includes(query.toString().toLowerCase())
          );
          setFilteredSuggestions(matchedSuggestions);
       },[query]);
  
  
    const handleInputChange = (e) => {

      const userInput = e.target.value;
      setQuery(userInput);
    //  console.log(userInput);

      if (userInput.trim() !== "") {
        setShowSuggestions(true);
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
       
        <input
          type="text"
          value={query}
          onInput={handleInputChange}
          placeholder="Search any projects..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
  

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